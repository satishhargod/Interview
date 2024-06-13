// https://www.geeksforgeeks.org/javascript-output-based-interview-questions/


///////----------------
var foo = "foo1";
var foo = "foo2"; // No problem, 'foo1' is replaced with 'foo2'.

let bar = "bar1"; 
//let bar = "bar2"; // SyntaxError: Identifier 'bar' has already been declared


// Function Declaration
console.log(foo); // [Function: foo]
foo(); // 'FOOOOO'
function foo() {
  console.log('FOOOOO');
}
console.log(foo); // [Function: foo]

// Function Expression
console.log(barfun); // undefined
barfun(); // Uncaught TypeError: barfun is not a function
var barfun = function () {
  console.log('barfunRRR');
};
console.log(barfun); // [Function: barfun]


////////////////////-----------

function abc(a, b, b){
    return a + b + b;
}
console.log(abc(10, 20, 50))

//Output is - 110



var a;
typeof a;				// "undefined"

a = "hello world";
typeof a;				// "string"

a = 42;
typeof a;				// "number"

a = true;
typeof a;				// "boolean"

a = null;
typeof a;				// "object" -- weird, bug

a = undefined;
typeof a;				// "undefined"

a = { b: "c" };
typeof a;				// "object"


var a = null;
console.log(a == null); // true
console.log(a == undefined); // true



console.log(1 == '1'); // true
console.log(1 == [1]); // true
console.log(1 == true); // true
console.log(0 == ''); // true
console.log(0 == '0'); // true
console.log(0 == false); // true
console.log(Number("55")); // 55
console.log(Number(55)); // 55
console.log(Number("55a")); // NaN
console.log(Number("1+2+3+4")); //NaN
console.log(eval("1+2+3+4")); // 10
// console.log(eval("1+2+3+4+a")); // error
console.log(parseInt("123Hello")); // 123
console.log(parseInt("Hello123")); // NaN
console.log(typeof typeof 1); // string

console.log(1 +  "2" + "2"); // "122"
console.log(1 +  +"2" + "2"); // "32"
console.log(1 +  - "1" + "2"); // "02"
console.log(+"1" +  "1" + "2"); // "112"
console.log( "A" - "B" + "2"); // "NaN2"
console.log( "A" - "B" + 2); // NaN

console.log("0 || 1 = "+(0 || 1)); // 0 || 1 = 1
console.log("1 || 2 = "+(1 || 2)); // 1 || 2 = 1
console.log("0 && 1 = "+(0 && 1)); // 0 && 1 = 0
console.log("1 && 2 = "+(1 && 2)); // 1 && 2 = 2

"" == "0"; // false
0 == ""; // true
0 == "0"; // true

false == "false"; // false
false == "0"; // true

false == undefined; // false
false == null; // false
null == undefined; // true

"\t\r\n" == 0; // true

console.log(1 < 2 < 3); //true
console.log(3 > 2 > 1); // false


let x = Infinity; 
console.log(typeof x); //number

let xx = "5"; 
let yy = 2; 
  
console.log(xx + yy); 52
console.log(xx - yy); 3

let newx = false; 
let newy = "0"; 
let newz = 0; 
  
console.log(newx == newy);  true
console.log(newx == newz); true


const obj1 = {Name: "Hello", Age: 16};
const obj2 =  {Name: "Hello", Age: 16};
console.log(obj1 == obj2) // false

const aobj1 = {Name: "Hello", Age: 16};
const aobj2 = obj1;
console.log(obj1 == obj2) // true

const bobj1 = {Name: "Hello", Age: 16};
const bobj2 = {Name: "Hello", Age: 16};
console.log(JSON.stringify(obj1) === JSON.stringify(obj2)) // true


////

function Person(name) {
    this.name = name;
  }
  
  var person = Person('John');
  console.log(person); // undefined
  console.log(person.name); // Uncaught TypeError: Cannot read property 'name' of undefined
  
  var person = new Person('John');
  console.log(person); // Person { name: "John" }
  console.log(person.name); // "john"


  const studentNames = {
    student1: 'Halina',
    student2: "Brookes",
    student3:"Anthony"
}

Object.defineProperty(studentNames, "student4", {
value: "Mirabel",
})

console.log(studentNames) // { student1: 'Halina', student2: 'Brookes', student3: 'Anthony' }
console.log(studentNames.student4) // Mirabel

///


let ax = 10; 
let ay = 20; 
  
console.log("total = " + ax + ay); 1020