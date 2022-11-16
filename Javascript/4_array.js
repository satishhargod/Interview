
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

////////////////
// How can i remove key and value in object 

// program to remove a property from an object

// creating an object
const student = { 
    name: 'John',
    age: 20,
    hobbies: ['reading', 'games', 'coding'],
    greet: function() {
        console.log('Hello everyone.');
    },
    score: {
        maths: 90,
        science: 80
    }
};

// deleting a property from an object
delete student.greet;
delete student['score'];

console.log(student);

//////////////////////

const array = [1,2,3,4]
array[105]= 100
console.log(array.length)

// output - 106

////////////////////////
let multiArray = [3, 4, [7, 8, [4, 1, [10]]]]
multiArray = multiArray.toString().split(",")
let sum = 0
for (const array of multiArray) {
    sum += +array
}
console.log(sum)

////////////////////////
let arr1 = [3, 4, [7, 8, [4, 1, [10]]]]

console.log(arr1.flat(Infinity).reduce((v, i) => (v + i)));