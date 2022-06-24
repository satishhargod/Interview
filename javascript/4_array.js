
let fruits = ['Apple', 'Banana', 'Mango', 'Orange']
let removed = delete fruits(2);
//Output - TypeError: fruits is not a function

let fruitsarr = ['Apple', 'Banana', 'Mango', 'Orange']
let removedarr = fruitsarr.splice(2, 1);
console.log("fruits", fruitsarr)
// Output is  - [ 'Apple', 'Banana', 'Orange' ]

//1. How can I remove a specific item from an array?

let value = 3

let arr = [1, 2, 3, 4, 5, 3]

arr = arr.filter(item => item !== value)

console.log(arr)
// [ 1, 2, 4, 5 ]