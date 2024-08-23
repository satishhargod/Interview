// // function sleep(ms) {
// //   return new Promise((resolve) => {
// //     setTimeout(resolve, ms);
// //   });
// // }

// // async function calldata(){
// //   await sleep(5000);
// //   console.log("rrrrrrrrrrrr")
// // }

// // calldata()

// // let data = `My name "satish hargod"`
// // console.log("data", data)

// let s = "String";
// s= ["k"]
// console.log(s[0])


let data = [
    ["A", "B", "C","X"],
    ["D", "E", "F","Y", "k"],
    ["D", "E", "F","Y", "k"],
    ["G", "H", "I","Z", "k", "J"]
  ];

//   data = data.toString();
//   data = data.replace('[', '').replace('],','\n')
// console.log("data", data)
//   A,D,D,G
// B,E,E,H
// C,F,F,I
// X,Y,Y,Z
// K,K,K
// J

// let arr = []
// for (const iteratorArr of data) {
//     let arrcount = 0
//     for (const iterator of iteratorArr) {       
//         if(typeof arr[arrcount] == 'undefined') {
//             arr[arrcount] = [iterator]
//         }else{
//             arr[arrcount].push(iterator)
//         }
//         arrcount++
//         if(iteratorArr.length == arrcount){
//             arrcount = 0 
//         }
//     }  
//     console.log("arr", arr)         
// }

// arr = arr.join('\n')
// console.log(arr)
// // arr = arr.toString().replace("[", '')


// let arr = []
// for (let i = 0; i < data.length; i++) {
//    let childArr = data[i]
//     for (let j = 0; j < childArr.length; j++) {
//         if (typeof arr[j] == 'undefined') {
//            arr[j] = [childArr[j]]
//         }else{
//             arr[j].push(childArr[j])
//         }       
//     }
// }

// console.log(arr.join('\n'))


//#1 How To find duplicate elements in array in javascript|Javascript Coding Interview Question 

const arrNumber=[1,2,8,2,9,8]
const duplicates=arrNumber.filter((ele, index, arr)=>arr.indexOf(ele)!==index)
console.log(duplicates)

//#2 How To find max/min in a given array in javascript| Coding Interview Questions - 

const arrNumberr=[1,9,87,65,655] 
const maxFunction=(arr)=>{
  return arr.reduce(function(pre, cur) { return pre>cur?pre:cur})
}

//#4 How To find second Largest value in array|Javascript Coding Interview Question 

const intArray=[2,8,9,7] 
const largestValue=(arr)=>{ 
  firstLargestVlaue=Math.max(...arr) 
  index=arr.indexOf(firstLargestVlaue) 
  arr.splice (index,1)
  secondLargestVlaue=Math.max(...arr)
  return(secondLargestVlaue)
}

//#5 How to Find missing elements in a given Array 1 to 10

function findMissingElements(arr) {
  const fullArray = [...Array(11).keys()].slice(1); // Array [1, 2, 3, ..., 10]
  const missing = fullArray.filter(num => !arr.includes(num));
  return missing;
}

const inputArray = [1, 2, 3, 5, 6, 8, 9, 10]; // Example input
const missingElements = findMissingElements(inputArray);

console.log(missingElements); // Output: [4, 7]

// # how to find fictorial of a given number in Javascript

function factorialIterative(n) {
  if (n < 0) return "Undefined for negative numbers"; // Factorial is not defined for negative numbers
  let result = 1;
  for (let i = 2; i <= n; i++) {
      result *= i;
  }
  return result;
}

// Example usage
console.log(factorialIterative(5)); // Output: 120

// # how to find even or odd numbers in array in javascript| Coding Interview Questions

function findEvenNumbers(arr) {
  return arr.filter(num => num % 2 === 0);  // Filter even numbers
}

function findOddNumbers(arr) {
  return arr.filter(num => num % 2 !== 0);  // Filter odd numbers
}

// Example usage
const inputArrays = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = findEvenNumbers(inputArray);
const oddNumbers = findOddNumbers(inputArray);

console.log("Even numbers: ", evenNumbers);  // Output: [2, 4, 6, 8, 10]
console.log("Odd numbers: ", oddNumbers);    // Output: [1, 3, 5, 7, 9]

// # how to find prime number in Javascript

function isPrime(n) {
  if (n <= 1) return false; // 0 and 1 are not prime numbers
  if (n === 2) return true; // 2 is a prime number
  
  // Check from 2 to the square root of n
  for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) {
          return false;  // If divisible by any number, it's not prime
      }
  }
  return true;  // If no divisors were found, it's prime
}

// Example usage
console.log(isPrime(11)); // Output: true (11 is a prime number)
console.log(isPrime(10)); // Output: false (10 is not a prime number)