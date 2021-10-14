const fs = require('fs');
const readFileSyncAddress = 'input.txt';
let input = fs.readFileSync(readFileSyncAddress).toString().trim().split('\n');

let number = 665;
let count = 0;
while (input != count){
    number++;
    if (String(number).includes('666'))
        count++;
}
console.log(number);