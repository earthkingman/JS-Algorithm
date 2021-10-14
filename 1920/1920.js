const fs = require('fs');
const readFileSyncAddress = 'input.txt';
//const readFileSyncAddress = '/dev/stdin';
let input = fs.readFileSync(readFileSyncAddress).toString().trim().split('\n');



let n = Number(input.shift());
let nList = []
nList = input.shift().split(" ").map(e => parseInt(e));

let m = Number(input.shift());
let mList = []
mList = input.shift().split(" ").map(e => parseInt(e));
nList.sort((a,b)=>{
    return a-b;
})
let min = 0;
let max = n - 1;
let mid = 0;

function search(nList,mValue,min,max){
    while (min <= max){
        mid = parseInt((max + min) / 2);
        if (nList[mid] < mValue){
            min = mid + 1;
        }
        else if (nList[mid] > mValue){
            max = mid - 1
        }
        else if (nList[mid] == mValue){
            console.log(1);
            return ;
        }    
    }
    console.log(0);
    return;
}
for (let i = 0; i < mList.length; i++){
    max = n - 1;
    min = 0;
    mid = 0;
    search(nList, mList[i], min, max);
}

