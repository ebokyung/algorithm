const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const testCase = {
    N: +input.shift(),
    arr: input
}
solution(testCase);

function solution(testCase){
    const rank = new Array(testCase.N).fill(1);
    for(let i=0; i<testCase.N; i++){
        const [x,y] = testCase.arr[i].split(' ').map(i=>+i);
        for(let j=i+1; j<testCase.N; j++){
            const [p,q] = testCase.arr[j].split(' ').map(i=>+i);
            if(x<p && y<q) rank[i]=rank[i]+1; //내가 크면 너가 +1 (너보다 내 덩치가 커)
            if(x>p && y>q) rank[j]=rank[j]+1; //내가 작으면 내가 +1 (나보다 덩치 큰 사람 +1)
        }
    }
    console.log(rank.join(' '));
}