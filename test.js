let string = 'Write, edit and Run your javascript code using JS Online Compiler';
const data = string.split("")
let obj = {}
let highstCount = 1;
 let highValue = {}
for (const iterator of data) {
    if(obj.hasOwnProperty(iterator)){
        const count = obj[iterator]+1
        if(highstCount < count){
            highstCount = count
            highValue = {[iterator]:count}
        }
        obj = {...obj, [iterator]:count}
    }else{
        if(iterator !== ' '){
            obj = {...obj, [iterator]:1}
        }
    }    
}
console.log(highValue)