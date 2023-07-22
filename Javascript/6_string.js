// function reverseString(str) {
//     return str.split("").reverse().join("");
// }

// console.log(reverseString("hello"))

let newString = "";
let theString = 'my name is demo';
let counter = theString.length;
let spacecount = 0
let stringLength = theString.length;
do
{
    char = theString.substring(counter-1, counter);
    space = theString.substring(spacecount, spacecount+1);
    if(space == " "){
        newString += space
    }
    if(char != " "){
        newString += char
    }
    counter--;
    spacecount++;
}
while (counter > 0 );

console.log("newString", newString)

/////////////////////////////////////////////////////////////

var string = "Welcome to this Javascript Guide!";

// Output becomes !ediuG tpircsavaJ siht ot emocleW
var reverseEntireSentence = reverseBySeparator(string, "");

// Output becomes emocleW ot siht tpircsavaJ !ediuG
var reverseEachWord = reverseBySeparator(reverseEntireSentence, " ");

//console.log(reverseEachWord)
function reverseBySeparator(string, separator) {
   let data =  string.split(separator).reverse().join(separator)
  console.log(data)
  return data;
}