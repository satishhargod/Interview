
//Hoisting is a mechanism where variables and function declarations are moved to the top of their scope before code execution.

///////////////////////////////
sum(4,5)

function sum(a, b){
    let add = a+b;
    console.log(add)
}

/////////////////////////////

function run() {
    console.log(foo); // undefined
    var foo = "Foo";
    console.log(foo); // Foo
}
  
run();
////////////////////////////////

function checkHoisting() {
    console.log(foo); // ReferenceError
    let foo = "Foo";
    console.log(foo); // Foo
}
  
checkHoisting();

//////////////////////////////

function myFunc() {
    console.log(greeting1);
    console.log(greeting2);
    var greeting1 = "Hello";
    let greeting2 = "World";
}
  
myFunc();
// undefined
// ReferenceError: greeting2 is not defined


/////////////////////////////////////
for (var i = 0; i < 5; i++) {
    console.log(i); // 0 1 2 3 4
}
  
for (let j = 0; j < 5; j++) {
    console.log(j); // 0 1 2 3 4
}
  
console.log(i); // 5
console.log(j); // ReferenceError: j is not defined