function myDisplayer(sum) {
    let multi = sum * 2;
    console.log("multi", multi)
  }
  
  function myCalculator(num1, num2, myCallback) {
    let sum = num1 + num2;
    myCallback(sum);
  }
  
  myCalculator(5, 5, myDisplayer);




// const prompt=require("prompt-sync")({sigint:true}); 
// function greeting(name) {
//   console.log(`Hello, ${name}!`);
// }

// function processUserInput(callback) {
//   var name = prompt('Please enter your name:');
//   callback(name);
// }

// processUserInput(greeting);