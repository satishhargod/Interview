// function bubbleSort(arr) {
//     let len = arr.length;
//     for (let i = 0; i < len; i++) {
//       for (let j = 0; j < len - i - 1; j++) {
//         if (arr[j] > arr[j + 1]) {
//           let temp = arr[j];
//           arr[j] = arr[j + 1];
//           arr[j + 1] = temp;
//         }
//       }
//     }
//     return arr;
//   }
  
function bubbleSort(arr){
  for (let i = arr.length; i > 0; i--) {
    for (let j =0; j < i-1; j++) {
      if(arr[j] > arr[j+1]) {
        [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
      }
    }
  }
  return arr;
}

let arrn = [5, 3, 8, 4, 2];
console.log(bubbleSort(arrn)); // Output: [2, 3, 4, 5, 8]


function bubbleSort(arr) {
  for (const iterator of arr) {
      for (const [key, value] of arr.entries()) {
          if(arr[key] > arr[key+1]){
              let temp = arr[key]
              arr[key] = arr[key+1]
              arr[key+1] = temp
          }
      }
  }
  return arr
}

let arr = [5, 3, 8, 4, 2, 100, 86, 90];
//  let arr = ['sas', 'as', 'newt', 'raj', 'aa'];
console.log(bubbleSort(arr)); // Output: [2, 3, 4, 5, 8]