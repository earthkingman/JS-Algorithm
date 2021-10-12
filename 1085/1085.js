
const fs = require('fs');
const readFileSyncAddress = 'input.txt';
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(num => parseInt(num));

let x = input[0];
let y = input[1];
let w = input[2];
let h = input[3];

console.log(Math.min(x,y,w-x,h-y))
