// A variable declared in global scope is available to all functions
var hello = "Hello"; 
var helloAgain = "hello again"
var globalGoodbye = "goodbye globally"

function sayHello() {
  console.log(hello);
  return;
}

var sayHelloAgain = function () {
  console.log(helloAgain);
  return;
};

// sayHello();
// sayHelloAgain();

//A variable declared in local scope is only available to that function
function sayGoodbye() { 
  var goodbye = "Goodbye";
  console.log(goodbye);
  return;
}

//This will throw an error
var sayGoodbyeAgain = function () { 

  console.log(goodbye);

  return;
};

// sayGoodbyeAgain();

// Shadowing happens when the same variable is used in the local and global scope
var shadow = "Hello Shadow";
//  console.log(shadow);

// Logs "Hello"
function sayWhat() {
  console.log(shadow);
  return;
}

//Logs "Goodbye"
var sayWhatAgain = function () {
  var shadowAgain = "Goodbye Shadow";
  console.log(shadowAgain);   
};

sayGoodbye();
sayWhat();
sayWhatAgain();
