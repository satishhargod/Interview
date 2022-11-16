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