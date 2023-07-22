const sum = a => b => b ? sum(a+b) : a
function sum(a) {
   return function (b) {
       return !isNaN(b) ? sum(a + b) : a
    }
}

console.log(sum(0)(2)(0)(1)(5)(6)(7)())