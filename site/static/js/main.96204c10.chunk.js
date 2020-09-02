(this["webpackJsonpsolo-project"]=this["webpackJsonpsolo-project"]||[]).push([[0],{12:function(e,t,a){},29:function(e,t,a){},30:function(e,t,a){},34:function(e,t,a){e.exports=a(62)},39:function(e,t,a){},61:function(e,t,a){},62:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(31),r=a.n(c),o=(a(39),a(12),a(9)),u=a.n(o),i=a(10),s=a.n(i),m=a(2);var d=function(){var e=Object(m.f)();function t(t){var a=t.target.id,n={token:s.a.get("token")?s.a.get("token"):null};u.a.post("".concat("","/checkAuth"),n).then((function(e){return e})).then((function(t){"failure"!=t.data?"login"==a?alert("You Are Already Logged In"):(console.log("Token passed sucessfully",t.data),e.push("/".concat(a))):(console.log("No token exists"),e.push("/login"),alert("Please Login to Access Site"))})).catch((function(e){console.log(e)}))}return l.a.createElement("nav",null,l.a.createElement("h1",null,"SUPER DUPER SOUNDS"),l.a.createElement("ul",{className:"nav-links"},l.a.createElement("li",null,l.a.createElement("button",{className:"nav-link",id:"about",onClick:t},"About")),l.a.createElement("li",null,l.a.createElement("button",{className:"nav-link",id:"tracks",onClick:t},"Tracks")),l.a.createElement("li",null,l.a.createElement("button",{className:"nav-link",id:"uploadsound",onClick:t},"Upload Sounds")),l.a.createElement("li",null,l.a.createElement("button",{className:"nav-link",id:"login",onClick:t},"Login")),l.a.createElement("li",null,l.a.createElement("button",{className:"nav-link",onClick:function(){s.a.remove("token"),e.push("/login"),alert("logged out")}},"Logout"))))};var E=function(){return l.a.createElement("div",{className:"App"},l.a.createElement("h2",{className:"page-title"},"ABOUT PAGE"),l.a.createElement("h2",null,"ABOUT SUPER DUPER SOUNDS"),l.a.createElement("p",null,"Welcome To Super Duper Sounds! This website was created to ensure a good place for people to find sounds. Simply create an account and access our library. You can also upload your own sounds and tunes!"))},p=a(1),b=(a(29),a(14));var g=function(e){var t=e.trackUrl,a=e.trackTitle;return l.a.createElement("div",{className:"audio-track-container"},l.a.createElement("div",null,l.a.createElement("h2",{className:"track-title"},a),l.a.createElement("br",null),l.a.createElement(b.a,{src:[t],isDark:!0})))};var f=function(){var e=Object(n.useState)([]),t=Object(p.a)(e,2),a=t[0],c=t[1];Object(n.useEffect)((function(){r()}),[]);var r=function(){c(),u.a.get("/gettracks").then((function(e){var t=[];Object.keys(e.data).map((function(a){return t.push(e.data[a])})),c(t)})).catch((function(e){console.log(e)}))};return l.a.createElement("div",{className:"App"},l.a.createElement("h2",{className:"page-title"},"TRACKS"),l.a.createElement("div",null,l.a.createElement("div",{className:"side-margin"},a?a.map((function(e){return l.a.createElement("div",{key:e.location},l.a.createElement(g,{className:"no-top-margin ",trackUrl:e.location,trackTitle:e.title}))})):"Loading")))};a(61);var h=function(){var e=Object(n.useState)(),t=Object(p.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(""),o=Object(p.a)(r,2),i=(o[0],o[1],Object(n.useState)(!0)),d=Object(p.a)(i,2),E=d[0],b=d[1],g=Object(n.useState)(""),f=Object(p.a)(g,2),h=f[0],v=f[1],k=Object(n.useState)(""),O=Object(p.a)(k,2),N=O[0],j=O[1],S=Object(m.f)(),w=function(){b(!1);var e=s.a.get("token")?s.a.get("token"):null,t={file:a,name:h,keyword:N,token:e};u.a.post("/uploadFile",t).then((function(e){return e})).then((function(e){S.push("/uploadsound"),alert("Successfully Uploaded File")})).catch((function(e){console.log("ERRRRRR",e),alert("Error ".concat(e))}))};return l.a.createElement("div",null,l.a.createElement("div",{className:"input-div centered"},l.a.createElement("label",{htmlFor:"soundname"},"Sound Name"),l.a.createElement("br",null),l.a.createElement("input",{className:"input",id:"soundname",onChange:function(e){return v(e.target.value)}}),l.a.createElement("br",null),l.a.createElement("label",{htmlFor:"keyword"},"Keyword"),l.a.createElement("br",null),l.a.createElement("input",{className:"input",id:"keyword",onChange:function(e){return j(e.target.value)}}),l.a.createElement("br",null),l.a.createElement("h5",null,"Must Be Valid .mp3 File To Run Correctly"),l.a.createElement("form",null,l.a.createElement("br",null),l.a.createElement("input",{className:"upload-file",type:"file",onChange:function(e){var t=e.target.files[0];c((function(e){return t}))}})),l.a.createElement("br",null),l.a.createElement("button",{className:"upload-btn",onClick:function(){console.log("keyword",N),N&&h&&a?w():alert("Please Fill Out All Fields")},disabled:!E},E?"Upload":"Uploading!")))};var v=function(){return l.a.createElement("div",{className:"App"},l.a.createElement("h2",{className:"page-title"},"UPLOAD A SOUND"),l.a.createElement(h,null))};a(30);var k=function(){var e=Object(n.useState)(""),t=Object(p.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(""),o=Object(p.a)(r,2),i=o[0],s=o[1],d=Object(n.useState)(""),E=Object(p.a)(d,2),b=E[0],g=E[1],f=Object(m.f)();return l.a.createElement("div",null,l.a.createElement("label",{className:"input-name-lbl"},"NAME"),l.a.createElement("br",null),l.a.createElement("input",{className:"input",type:"name",id:"name",placeholder:"Enter Name...",onChange:function(e){return g(e.target.value)}}),l.a.createElement("br",null),l.a.createElement("label",{className:"input-name-lbl"},"EMAIL"),l.a.createElement("br",null),l.a.createElement("input",{className:"input",type:"email",id:"email",placeholder:"Enter Email...",onChange:function(e){return c(e.target.value)}}),l.a.createElement("br",null),l.a.createElement("label",{className:"input-name-lbl"},"PASSWORD"),l.a.createElement("br",null),l.a.createElement("input",{className:"input",type:"password",id:"password",placeholder:"Enter Password...",onChange:function(e){return s(e.target.value)}}),l.a.createElement("br",null),l.a.createElement("button",{className:"login-btn",onClick:function(){if(a&&i&&b){var e={email:a,password:i,name:b};u.a.post("".concat("","/createUser"),e).then((function(e){return e})).then((function(e){console.log("Successfully created new user!",e),f.push("/about"),alert("Created New User: ".concat(b))})).catch((function(e){console.log("ERRRRRR",e),alert("Error ".concat(e))}))}}},"Register"))};var O=function(){var e=Object(n.useState)(""),t=Object(p.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(""),o=Object(p.a)(r,2),i=o[0],d=o[1],E=Object(m.f)();return l.a.createElement("div",null,l.a.createElement("label",{className:"input-name-lbl"},"EMAIL"),l.a.createElement("br",null),l.a.createElement("input",{required:!0,className:"input",type:"email",id:"email",placeholder:"Enter Email...",onChange:function(e){return c(e.target.value)}}),l.a.createElement("br",null),l.a.createElement("label",{className:"input-name-lbl"},"PASSWORD"),l.a.createElement("br",null),l.a.createElement("input",{required:!0,className:"input",type:"password",id:"password",placeholder:"Enter Password...",onChange:function(e){return d(e.target.value)}}),l.a.createElement("br",null),l.a.createElement("button",{className:"login-btn",onClick:function(){var e={email:a,password:i};u.a.post("".concat("","/signIn"),e).then((function(e){return e})).then((function(e){console.log(e.data),e.data.idToken&&"auth/wrong-password"!=e.code?(console.log("Set Token",e.data.idToken),s.a.set("token",e.data.idToken),E.push("/about")):alert("Wrong Passcode or Email...")})).catch((function(e){console.log(e)}))}},"Login"))};var N=Object(m.g)((function(){var e=Object(n.useState)(!0),t=Object(p.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(""),o=Object(p.a)(r,2),u=(o[0],o[1],Object(n.useState)("")),i=Object(p.a)(u,2),s=(i[0],i[1],Object(n.useState)("")),m=Object(p.a)(s,2);return m[0],m[1],l.a.createElement("div",{className:"login-container centered"},l.a.createElement("h1",null,a?"LOGIN":"REGISTER"),a?l.a.createElement(O,null):l.a.createElement(k,null),l.a.createElement("button",{onClick:function(){c(!a)},className:"toggle-login-view"},a?"Go To Register":"Go To Login"))})),j=a(11);function S(){return l.a.createElement(j.a,null,l.a.createElement("div",{className:"App"},l.a.createElement(d,null),l.a.createElement(m.c,null,l.a.createElement(m.a,{path:"/",exact:!0,component:E}),l.a.createElement(m.a,{path:"/about",component:E}),l.a.createElement(m.a,{path:"/tracks",component:f}),l.a.createElement(m.a,{path:"/uploadsound",component:v}),l.a.createElement(m.a,{path:"/login",component:N}))))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(S,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[34,1,2]]]);
//# sourceMappingURL=main.96204c10.chunk.js.map