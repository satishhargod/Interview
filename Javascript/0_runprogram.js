let data = [0, 1 ,2,3,4,5,6,7,8, 11, 12, 13, 14, 15, 16, 17, 18, 10 ];
 data = data.sort((a,b)=> a-b)
 //console.log(data);
let newData = []
for (var i = 0; i < data.length; i++){
    if(i != data[i]){
        newData.push(i)
        break;    
    }    
}
 console.log(newData)



// console.log(a)
// let a = 5;

///
// const a = () =>{ return 5 + 6}
// console.log("a", a())

// let show = function() {
//     console.log('Anonymous function');
// };

// show();

// const numbers = "SATISH";
// let newdd = numbers.split('').reverse().join('')
// console.log("numbers", newdd , numbers)

// const [one, two, ...rest] = numbers;
// console.log("one", one)
// console.log("two", two)
// console.log("rest", rest)


// let index = 0
// let result = array.reduce((accumulator, currentValue) => {
//   index++
//    //accumulator.push(indexCount)
//   }, []);




// const occurrences = array.reduce(function (acc, curr) {
//     return acc[curr] ? ++acc[curr] : acc[curr] = 1, acc
//   }, []);
// console.log("occurrences", occurrences)

// let numbers = [3, 10, 2, 9, 9, 1, 7];
// numbers.sort((a, b) => b - a); // sort in descending order
// const secondLargest = numbers[1];

// console.log("secondLargest", secondLargest)

// console.log("first");
// setTimeout(() => {
//     console.log("second");
// }, 0);
// console.log("third");


// function wait(milliseconds) {
//     return new Promise(resolve => {
//       setTimeout(() => {
//         console.log("Secound")
//         resolve(true);
//       }, milliseconds);
//     });
//   }
  
//   async function synchronousTimeout() {
//     console.log("First");
//     await wait(0);
//     console.log("Third");
//   }
  
//   synchronousTimeout();


// console.log(a);
// var a=10