const { reverse } = require('dns');
const fs = require('fs');
const readFileSyncAddress = 'input.txt';
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

input.pop();

for (let i = 0; i < input.length; i++){
    if (input[i] == (input[i].split("").reverse().join("")))
        console.log("yes");
    else
        console.log("no");
}