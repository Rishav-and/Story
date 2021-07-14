const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/" , function(req,res){
  res.sendFile(__dirname + "/signup.html");
});

app.post("/" , function(req ,res){

  var firstName = req.body.fname;
  var lastName = req.body.lname;
  var email = req.body.email;

  

});

app.listen("3000", function(){
 console.log("listening to port 3000");
});

//mailchimp api
// 85e4c2048cae8148f81063489060dcf6-us6
