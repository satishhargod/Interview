const posts = [
    {"platform": "Facebook", "likes": 100, "comments": 20, "shares": 50, "followers": 1000},
    {"platform": "Twitter", "likes": 50, "comments": 10, "shares": 30, "followers": 500},
    {"platform": "Facebook", "likes": 200, "comments": 40, "shares": 80, "followers": 1500},
    {"platform": "Twitter", "likes": 80, "comments": 15, "shares": 20, "followers": 1000}
]

let newObj = {};
let count = 1
for (const iterator of posts) {
    if(!(iterator.platform in newObj)){
        newObj[iterator.platform] = {totalSum: 0, followersSum: 0};
    }    
    newObj[iterator.platform]['totalSum'] += iterator.likes + iterator.comments+ iterator.shares  
    newObj[iterator.platform]['followersSum'] += iterator.followers      
}
let testObj = {}
for (const key in newObj) {
    testObj[key] = newObj[key]['totalSum'] /newObj[key]['followersSum']    
}
console.log('testObj', newObj, testObj)  



const generatePassword = () =>{
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const digitChars = '0123456789';
    const specialChars = '@!%#';
    const allChars = uppercaseChars + lowercaseChars + digitChars + specialChars;
  
    let password = '';
  
    password += uppercaseChars.charAt(Math.floor(Math.random() * uppercaseChars.length));
  
    password += lowercaseChars.charAt(Math.floor(Math.random() * lowercaseChars.length));
  
    password += digitChars.charAt(Math.floor(Math.random() * digitChars.length));
  
    password += specialChars.charAt(Math.floor(Math.random() * specialChars.length));
  
    for (let i = 4; i < 8; i++) {
      const randomIndex = Math.floor(Math.random() * allChars.length);
      password += allChars.charAt(randomIndex);
    }
  
    password = password.split('').sort(() => Math.random() - 0.5).join('');
  
    return password;
  }

  export default generatePassword;