const fs = require('fs');
const readFileSyncAddress = 'input.txt';
//const readFileSyncAddress = '/dev/stdin';
let input = fs.readFileSync(readFileSyncAddress).toString().trim().split('\n');

// console.log(input);
let [n,k] = input.shift().split(" ");


let sum  = 0;
for (let i = 0; i < input.length; i++){
    sum = sum + Number(input[i]);
}
let max = parseInt(sum / k);
let min = 1;
let mid = 0;
let result = 0;

while (min <= max){
    mid = parseInt((max + min) / 2);
    let ok = isOk(mid)
    if (ok){
        min = mid + 1;
        result = mid;
    }else{
        max = mid - 1;
    }
}
console.log(result);
function isOk(mid){
    let count = 0;
    for (let i = 0; i < input.length; i++){
        count = count + parseInt(input[i] / mid);
    }
    if (count >= k)
        return true;
    else
        return false;
}