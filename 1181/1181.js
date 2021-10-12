const fs = require('fs');
const readFileSyncAddress = 'input.txt';
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = input.shift()
input.sort((a,b)=>{
    if (a.length < b.length)
        return -1;
    if (a.length == b.length)
        return a.localeCompare(b)
})

input = input.filter((element,index)=>{
    if (input.indexOf(element) === index)
        return element;
})

for (let i =0 ; i < input.length; i++){
    console.log(input[i]);
}