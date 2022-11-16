// let a = ['01', '02', '03']
// let key = 'key';
// let fval = 80

// var object={};
// var createobj = {}
// // for(var i=0;i<a.length;i+=1)
// // {
// //     for (const b of a) {
// //         console.log(b)   
// //     }
// //     //createobj[a[i+1]] = "55"
// //     object[a[i]]=createobj;
// //     //object[a[i]]=a[i+1];
// // }

        
//         // if(Object.keys(pre).length != 0){
//         //     pre[sd] = newobj           
//         // }
//         // sd = val;
//         //  //console.log(sd)
//         // pre = {...newobj}

// let arrayl = a.length;
// let aa = 0;
// let pre = [];
// let sd = 0;
// for (let val of a) {
//     if(arrayl >= 0){
//         arrayl--;
//         let newobj = {
//             [val]: a[aa+1]== undefined?{key:fval}:a[aa+1]
//         }
//         aa++;
//         // pre.push(newobj)
//     }
// }
// console.log(pre);

let arr1 = [1, 1, [1, [1, 1, 1], 1], 1];

console.log(arr1.flat(Infinity).reduce((v, i) => (v + i)));