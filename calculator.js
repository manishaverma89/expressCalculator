// Make a new folder called Calculator on your Desktop
// Change Directory to this new folder
// Inside the Calculator folder, create a new file called calculator.js
// Set up a new NPM package
// Open the project folder in vscode 
// Using NPM install the express module
// Require express in your calculator.js
// Setup express
// Create a root route get method with app.get()
// Send the words Hello World from the root route as the response
// Spin up our server on port 3000 with app.listen
// Run server with nodemon        (nodemon calculator.js)




const express = require("express");   //step7
const app = express();                //step8

const bodyParser = require("body-parser");                          //require body-parser

app.use(bodyParser.urlencoded({extended:true }));         //because body-parser works with express

app.get("/" , function(req, res){     //step9
  res.sendFile(__dirname + "/index.html");                 //step10
});

app.post("/" , function(req,res){
    //console.log(req.body.num1);               //num1 comes from the naming attribute of input in index.html
    var n1= Number(req.body.num1);
    var n2= Number(req.body.num2);
    var result = n1+n2;
    res.send("Result is: " + result);
});

app.listen(3000 , function(){         //step11

    console.log("server strated");
});


