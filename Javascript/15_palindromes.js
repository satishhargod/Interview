
// /////////////////////////////////////////////////************************************************* */
// function countPalindromes(str) {
//   let count = 0;
  
//   // Generate all possible substrings of the string
//   for (let i = 0; i < str.length; i++) {
//     for (let j = i + 1; j <= str.length; j++) {
//       let substr = str.slice(i, j);
      
//       // Check if the substring is a palindrome
//       if (isPalindrome(substr)) {
//         count++;
//       }
//     }
//   }
  
//   return count;
// }

// // Helper function to check if a string is a palindrome
// function isPalindrome(str) {
//   str = str.toLowerCase().replace(/[\W_]/g, '');
//   for (let i = 0, j = str.length - 1; i < j; i++, j--) {
//     if (str[i] !== str[j]) {
//       return false;
//     }
//   }
//   return true;
// }

// // Example usage
// console.log(countPalindromes("level")); // Output: 3
// console.log(countPalindromes("racecar")); // Output: 7
// ///////////////////////////////////////////////////////////////////////////////////////////////////////


// function countPalindromes(str) {
//   let count = 0;
//   for (let i = 0; i < str.length; i++) {
//     for (let j = i + 1; j <= str.length; j++) {
//       let subStr = str.substring(i, j);
//       console.log("subStr", subStr)
//       if (subStr === subStr.split('').reverse().join('')) {
//         //console.log("subStr", subStr)
//         count++;
//       }
//     }
//   }
//   return count;
// }

// console.log(countPalindromes("bcacbf"))


function isPalindrome(str){
  const len = str.length
  let msg = "isPalindrome"
  let count = 0;
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j <= str.length; j++) {
      let subStr = str.substring(i, j);
      if(subStr === subStr.split('').reverse().join('')){
        if(subStr.length > 1){
          console.log("subStr", subStr)
        }
        count++
      }
    }
  }
 return msg
}
console.log(isPalindrome("madam"))


function isPalindrome(str) {
  str = str.replace(/\W/g, '').toLowerCase();
  return (str == str.split('').reverse().join(''));
}

console.log(isPalindrome("level"));                   // logs 'true'
console.log(isPalindrome("levels"));                  // logs 'false'
console.log(isPalindrome("A car, a man, a maraca"));  // logs 'true'