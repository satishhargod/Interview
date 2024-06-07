///////----------------
var foo = "foo1";
var foo = "foo2"; // No problem, 'foo1' is replaced with 'foo2'.

let bar = "bar1"; 
//let bar = "bar2"; // SyntaxError: Identifier 'bar' has already been declared


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


console.log(Number("55")); // 55
console.log(Number(55)); // 55
console.log(Number("55a")); // NaN
console.log(Number("1+2+3+4")); //NaN
console.log(eval("1+2+3+4")); // 10
// console.log(eval("1+2+3+4+a")); // error
console.log(parseInt("123Hello")); // 123
console.log(parseInt("Hello123")); // NaN


const obj1 = {Name: "Hello", Age: 16};
const obj2 =  {Name: "Hello", Age: 16};
console.log(obj1 == obj2) // false

const aobj1 = {Name: "Hello", Age: 16};
const aobj2 = obj1;
console.log(obj1 == obj2) // true

const bobj1 = {Name: "Hello", Age: 16};
const bobj2 = {Name: "Hello", Age: 16};
console.log(JSON.stringify(obj1) === JSON.stringify(obj2)) // true