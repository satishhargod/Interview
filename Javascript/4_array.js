
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

//Remove Duplicate Items from Array

let ageGroup = [18, 21, 1, 1, 51, 18, 21, 5, 18, 7, 10];
let uniqueAgeGroup = ageGroup.reduce(function (accumulator, currentValue) {
  if (accumulator.indexOf(currentValue) === -1) {
    accumulator.push(currentValue);
  }
  return accumulator;
}, []);

console.log(uniqueAgeGroup); // [ 18, 21, 1, 51, 5, 7, 10 ]


// Grouping Objects by a property

let people = [
    { name: "John", age: 21 },
    { name: "Oliver", age: 55 },
    { name: "Michael", age: 55 },
    { name: "Dwight", age: 19 },
    { name: "Oscar", age: 21 },
    { name: "Kevin", age: 55 },
  ];
  
  function groupBy(objectArray, property) {
    return objectArray.reduce(function (accumulator, currentObject) {
      let key = currentObject[property];
      if (!accumulator[key]) {
        accumulator[key] = [];
      }
      accumulator[key].push(currentObject);
      return accumulator;
    }, {});
  }

  arr.reduce(function(acc, crr){
    crr[pro]
  })
  
  let groupedPeople = groupBy(people, "age");
  console.log(groupedPeople);