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



              // CALCULATOR

const express = require("express");   //step7
const app = express();                //step8

const bodyParser = require("body-parser");                          //require body-parser

app.use(bodyParser.urlencoded({extended:true }));  //to parse data that comes from an HTML form
app.use(express.static('public'));           //to include static files in calculator.js, added public folder

app.get("/" , function(req, res){     //step9
  res.sendFile(__dirname + "/index.html");                 
});

app.post("/" , function(req,res){
    //console.log(req.body.num1);               //num1 comes from the naming attribute of input in index.html
    var n1= Number(req.body.num1);
    var n2= Number(req.body.num2);
    var result = n1+n2;
    res.send("Your calculation is: " + result);
});


              // BMI Calculator

app.get("/bmicalculator" ,function(req,res){
     res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmicalculator", function(req,res){
    // console.log(req.body);
    var bmiWeight = Number(req.body.weight) ;
    var bmiHeight = Number(req.body.height) ;
    var bmiresult = bmiWeight/(bmiHeight * bmiHeight);

    res.send("Your BMI is: " + bmiresult);
  
});

app.listen(3000 , function(){         //step11

    console.log("server strated");
});


// bodyParser.urlencoded :-
// Special one that we use when we’re trying to parse data that comes from an html form.
// So whenever you’re trying to grab the information that gets posted to your server from an html form , you’re going to be using urlencoded.

// {extended:true} allows us to post nested objects


