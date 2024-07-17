// const { StringDecoder } = require("string_decoder");
// const decoder = new StringDecoder("utf-8");
 
// const buffer = Buffer.from("This is a buffer");
// const buffer_text = decoder.write(buffer);
// console.log(buffer_text);

const jwt = require('jsonwebtoken');

// Secret key
const secretKey = 'your-256-bit-secret';

// 1. Create (Sign) a JWT
const payload = { sub: '1234567890', name: 'John Doe', iat: Math.floor(Date.now() / 1000) };
const token = jwt.sign(payload, secretKey, { algorithm: 'HS256' });
console.log('JWT:', token);

// 2. Verify a JWT
try {
  const decoded = jwt.verify(token, secretKey, { algorithms: ['HS256'] });
  console.log('Decoded:', decoded);
} catch (err) {
  console.log('Invalid token:', err.message);
}

// 3. Decode a JWT without verification
const decodedHeader = jwt.decode(token, { complete: true }).header;
const decodedPayload = jwt.decode(token);
console.log('Header:', decodedHeader);
console.log('Payload:', decodedPayload);

// 4. Refresh a JWT
const newToken = jwt.sign(payload, secretKey, { algorithm: 'HS256', expiresIn: '1h' });
console.log('New JWT:', newToken);