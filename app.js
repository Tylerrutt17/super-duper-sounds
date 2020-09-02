const express = require('express');
const app = express();
const port = 8000;

const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const cors = require('cors')
const admin = require('firebase-admin')
const firebase = require('firebase')

// GOING TO CLEAN ALL OF THIS STUFF UP

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

app.use(express.static(__dirname+'/site'));
app.use(express.static(__dirname+'/fbConfigs'));
app.use(express.static(__dirname+'/auth'));

  // app.get('/about', (req, res) => {
  //   res.redirect('/about')
  // })

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
                    res.end()
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

  app.get("/gettracks", async (req, res) => {
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
  

app.listen(port, ()=>{
    console.log(`Listening on http://localhost:${port}`)
})