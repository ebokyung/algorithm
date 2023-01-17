const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [N,...input] = require('fs').readFileSync(filePath).toString().trim().split('\n');

class Node {
    constructor(n){
        this.value = n;
        this.prev = null;
        this.next = null;
    }
}

class Deque {
    constructor() { 
        this.front = null;
        this.rear = null;
        this.length = 0;
    }
    push_front(n){
        const newNode = new Node(n);

        if(!this.length){ //덱에 아무것도 없으면
            this.front = newNode;
            this.rear = newNode;
        } else {    //빈 덱이 아니면
            newNode.next = this.front;
            this.front.prev = newNode;
            this.front = newNode;
        }

        this.length++;
    }
    push_back(n){
        const newNode = new Node(n);

        if(!this.length){ //덱에 아무것도 없으면
            this.front = newNode;
            this.rear = newNode;
        } else {    //빈 덱이 아니면
            newNode.prev = this.rear;
            this.rear.next = newNode;
            this.rear = newNode;
        }
        
        this.length++;
    }
    pop_front(){
        if(!this.length) return -1;
        else {
            const frontData = this.front.value;
            this.front = this.front.next;
            this.length--;
            return frontData;
        }
    }
    pop_back(){
        if(!this.length) return -1;
        else {
            const rearData = this.rear.value;
            this.rear = this.rear.prev;
            this.length--;
            return rearData;
        }
    }
    size(){
        return this.length;
    }
    empty(){
        if(this.length == 0) return 1;
        return 0;
    }
    frontValue(){
        if(this.length == 0) return -1;
        return this.front.value;
    }
    backValue(){
        if(this.length == 0) return -1;
        return this.rear.value;
    }
}

let answer = [];
const deque = new Deque();

for(let i=0; i<N; i++){
    const value = input[i].split(' ');

    if(value[0] == 'push_front') deque.push_front(value[1]);
    else if(value[0] == 'push_back') deque.push_back(value[1]);
    else if(value[0] == 'pop_front') answer.push(deque.pop_front());
    else if(value[0] == 'pop_back') answer.push(deque.pop_back());
    else if(value[0] == 'size') answer.push(deque.size());
    else if(value[0] == 'empty') answer.push(deque.empty());
    else if(value[0] == 'front') answer.push(deque.frontValue());
    else if(value[0] == 'back') answer.push(deque.backValue());
}

console.log(answer.join('\n'));