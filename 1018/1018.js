let fs = require('fs');
// const readFileSyncAddress = '/dev/stdin';
const readFileSyncAddress = 'input.txt';
let input = fs.readFileSync(readFileSyncAddress).toString().trim().split('\n');

function solution(input){
    let answer = [];
    let min = 64;
    [size, ...arr] = input;
    [row,col] = size.split(' ');
    arr = arr.map(str=> {
        return str.trim('\r').split('');
    })
    const line = ['WBWBWBWBWB','BWBWBWBWBW'];
    for (let i = 0; i <= row - 8; i++){
        for (let j = 0; j <= col - 8; j++){
            for (let z = 0; z < 2; z++){
                let count = 0;
                for (let x = 0; x < 8; x++){
                    for (let y = 0; y < 8; y++){
                        const current = arr[i + x][j + y];
                        if (current !== line[(x+z) %2][y]) count++;
                    }
                }
                if (min > count) min = count;
            }
        }
    }
    return min ;
}
console.log(solution(input));