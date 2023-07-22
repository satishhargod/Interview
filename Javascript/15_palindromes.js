
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


function countPalindromes(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j <= str.length; j++) {
      let subStr = str.substring(i, j);
      if (subStr === subStr.split('').reverse().join('')) {
        console.log("subStr", subStr)
        count++;
      }
    }
  }
  return count;
}

console.log(countPalindromes("bcacbf"))

