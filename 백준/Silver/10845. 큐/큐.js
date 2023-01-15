const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [N, ...arr] = require('fs').readFileSync(filePath).toString().trim().split('\n');

class Queue {
    constructor(arr) { 
        this.arr = arr;
    }
    push(n){
        this.arr.push(n);
    }
    pop(){
       let data = this.arr.shift();
       if(data) return data;
       else return -1;
    }
    size(){
        return this.arr.length;
    }
    empty(){
        if(this.arr.length == 0) return 1;
        else return 0;
    }
    front(){
        if(this.arr.length == 0) return -1;
        else return this.arr[0];
    }
    back(){
        if(this.arr.length == 0) return -1;
        else return this.arr[this.arr.length-1];
    }
}

let answer = [];
const queue = new Queue([]);
arr.map(e => {
    if(e.includes('push')) queue.push(e.split(' ')[1])
    else if (e == 'pop') answer.push(queue.pop())
    else if (e == 'size') answer.push(queue.size())
    else if (e == 'empty') answer.push(queue.empty())
    else if (e == 'front') answer.push(queue.front())
    else if (e == 'back') answer.push(queue.back())
})

console.log(answer.join('\n'));