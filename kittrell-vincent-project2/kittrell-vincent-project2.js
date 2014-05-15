//alert("JavaScript works!");


//Vincent Kittrell
// SDI 1405
//Project 2

//Global Variables
var myQuestion = "adventure";
var myRace = true;
var myLv = 20;



//functions
var myProcedure = function(MyName) {
    
    console.log("Your name is " + MyName);
    
};

var theName = prompt("Enter a name: ");

myRace = confirm("Are you human?");
    if (myRace === true) {
    console.log("You are human.");
}else{
   console.log("You are not human. You are very special.");
};

var myLv = function(MyLv) {
    
    console.log("Your character level is " + MyLv);
    
};

var theLv = prompt("Enter your character level: ");
(myLv <= 5);
myLv = 200
console.log("You have " + myLv + " gold coins to start off with!");

(myLv >= 10);
myLv = 500
console.log("You have " + myLv + " gold coins to start off with!");

(myLv >= 15);
myLv = 1000
console.log("You have " + myLv + " gold coins to start off with!");

(myLv = 20);
myLv = 2000
console.log("You have " + myLv + " gold coins to start off with!");




//Main Code

//Procedure Path
myProcedure(theName);

myQuestion = confirm("Would you like to go on an adventure with me?");

if (myQuestion === true){
    
    console.log("Yay!!! Before we go, we have to discuss a few things.");
    
}else{
    
    console.log("My 25 points of diplomacy says you will, but first I have some questions.");
    
}

//Boolean Path

//Local Variables


alert("A dragon is attacking a village!");

//functions
var p = true
var q = false
var r = false
while (p = true , q = false , r = false) {
    console.log("Did we slay the dragon, " + myVictory);
    (p && q) || (q && r)= myVictory;
}{
    console.log("Did we slay the dragon, " + myVictory);
    myVictory =p && (q || r);
};
