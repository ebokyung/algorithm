const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = require('fs').readFileSync(filePath).toString().trim().split('\n');
let [N,A,M,B] = input.map(i=> i.split(' ').map(j=>+j));

A.sort((a,b)=>a-b);

let answer = '';

for(let i=0; i<M; i++) {
    answer += BinarySearch(A, +B[i], 0, A.length-1) + '\n';
}

function BinarySearch(list, target, left, right){
    let mid = 0;

    while(left <= right){
        mid = Math.floor((left+right)/2);

        if(target == list[mid]) return 1;
        
        if(target > list[mid]) left = mid+1;
        else if(target < list[mid]) right = mid-1;
    }

    return 0;
}

console.log(answer);