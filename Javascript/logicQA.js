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