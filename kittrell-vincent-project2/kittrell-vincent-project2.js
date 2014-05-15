//alert("JavaScript works!");


//Vincent Kittrell
// SDI 1405
//Project 2

//Global Variables
var myQuestion = "adventure";
var human = true;
var myAge = 100;



//functions
var myProcedure = function(MyName) {
    
    console.log("Your name is " + MyName);
    
};

var theName = prompt("Enter a name: ");



//Main Code

//Procedure Path
myProcedure(theName);

myQuestion = confirm("Would you like to go on an adventure with me?");

if (myQuestion === true){
    
    console.log("Yay!!! Before we go, we have to discuss a few things.");
    
}else{
    
    console.log("My 25 points of diplomacy says you will, but first I have some questions.");
    
}
