const { StringDecoder } = require("string_decoder");
const decoder = new StringDecoder("utf-8");
 
const buffer = Buffer.from("This is a buffer");
const buffer_text = decoder.write(buffer);
console.log(buffer_text);