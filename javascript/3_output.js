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