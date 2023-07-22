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
