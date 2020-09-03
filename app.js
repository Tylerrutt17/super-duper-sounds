const express = require('express');
const app = express();
const port = 8000;
const path = require("path");

const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const cors = require('cors')
const admin = require('firebase-admin')
const firebase = require('firebase')

const multer = require('multer');
const upload = multer();

//const uuid = require('./uuid.js')

const serviceAccount = require('./serviceAccountKey.json')
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://super-douper-sounds.firebaseio.com"
})
var firebaseConfig = {
    apiKey: "AIzaSyDtB8di5IyIhPaoiudZHjXR23Y7lPgmKjI",
    authDomain: "super-douper-sounds.firebaseapp.com",
    databaseURL: "https://super-douper-sounds.firebaseio.com",
    projectId: "super-douper-sounds",
    storageBucket: "super-douper-sounds.appspot.com",
    messagingSenderId: "465791877838",
    appId: "1:465791877838:web:e29f1adf00fe190034069f",
    measurementId: "G-G6DDP4FL88"
  }
firebase.initializeApp(firebaseConfig)
var db = admin.database();

app.use(cors())
app.use(bodyParser.json())
app.use(cookieParser())
app.use(express.json())

app.use(express.static(path.join(__dirname, "..", "site")));
app.use(express.static(__dirname+'/site'));
app.use(express.static(__dirname+'/fbConfigs'));
app.use(express.static(__dirname+'/auth'));

  // NEXT STEPS;
  // 1. cleaning up routes,
  // 2. Clean up firebase config and put in own file.

  // responsible for creating a new user
  app.post('/createUser', (req, res) => {
    admin.auth().createUser({
        email: req.body.email,
        password: req.body.password,
        displayName: req.body.name
      })
        .then(function(userRecord) {
          // See the UserRecord reference doc for the contents of userRecord.
          console.log('Successfully created new user:', userRecord.uid);
          res.send(userRecord.uuid)
        })
        .catch(function(error) {
          console.log('Error creating new user:', error);
          res.send('error:', error)
        });
  })

  app.post('/signIn', (req, res)=> { 
    firebase.auth().signInWithEmailAndPassword(req.body.email, req.body.password)
        .then(function () {
            firebase.auth().currentUser.getIdToken(true).then(function (idToken){
                  // If sign in is successfully send idToken to the client
                    res.send({idToken})
                    //res.redirect('/about')
                }).catch(function (error) {
                    //Handle error
                    res.send(error)
                });
        }).catch(function (error) {
            //Handle error
            res.send(error)
        });
  })

  app.post("/gettracks", async (req, res) => {
    var ref = db.ref("tracks").limitToFirst(100);
    // Attach an asynchronous callback to read the data at our posts reference
    ref.on("value", function(snapshot) {
        res.send(snapshot.val())
    }, function (errorObject) {
        console.log("The read failed: " + errorObject.code);
        res.send(errorObject.code)
    });
});

// checks if token exists for each route, if so sends back response
app.post('/checkAuth', async (req, res)=> {
  if (req.body.token) {
    // idToken comes from the client app
    admin.auth().verifyIdToken(req.body.token)
    .then(function(decodedToken) {
      let uid = decodedToken.uid;
      console.log("Token Verified", uid)
      res.send(uid)
    }).catch(function(error) {
      res.send('failure')
    });
  } else {
    res.send('failure')
  }
})


// Was trying to do this backend, but would have been a massive hassle considering its meant to be done client side. Everything else though is backend. 
// Basically the whole File Upload would have taken a while to do in backend.
// app.post('/uploadFile', upload.single('file'), (req, res) => {
//   res.send('hi')
//     // console.log("UPLOAD CALLED!", req.file, req.test)
//     //  let file = req.file
//     // // console.log("File", file)
//     // res.send("Tried Something")
//     //   let id = "random-id-test"
//     //   let bucketName = 'tracks'
//     //   let storageRef = firebase.storage().ref(`${bucketName}/${id}`)
//     //   let uploadTask = storageRef.put(req.file)
//     //   console.log(req.file)
//     //   uploadTask.on('state_changed', 
//     //   (snapShot) => {
//     //       //takes a snap shot of the process as it is happening
//     //       console.log(snapShot)
//     //       console.log("UPLOADED file")
//     //   }, (err) => {
//     //       //catches the errors
//     //       console.log(err)
//     //   }, () => {
//     //       // gets the functions from storage refences the image storage in firebase by the children
//     //       // gets the download url then sets the image from firebase as the value for the imgUrl key:
//     //       firebase.ref('tracks').child(id).getDownloadURL()
//     //       .then(fireBaseUrl => {
//     //           uploadRefLoc(fireBaseUrl, id, req.body.name, req.body.keyword)
//     //           console.log("uploaded audio file to storage")
//     //       })
//     //   })
// })

const uploadRefLoc = (aLoc, id, sTitle, sKeyword)=> {
      let db = firebase.database()
      let ref = db.ref('tracks')
      ref.child(id).set({"location": aLoc, "title": sTitle, "keyword": sKeyword})
      .then(()=> {
          console.log("added reference to db")
      })
      .catch(()=> {
          // err uploading
      })
  }


app.listen(port, ()=>{
    console.log(`Listening on http://localhost:${port}`)
})