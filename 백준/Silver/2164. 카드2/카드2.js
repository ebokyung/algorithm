const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = require('fs').readFileSync(filePath).toString().trim();

class Node {
    constructor(value) {
        this.prev = null;
        this.next = null;
        this.value = value;
    }
}

class LinkedList {
    constructor() { 
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(n){ //1.초기 연결리스트 만들때 2.(제일 위 카드 삭제 후) 두번째 카드를 맨 아래로 보낼때
        const newNode = new Node(n);
        if (!this.head) this.head = newNode; //연결리스트에 노드가 아예 없으면 첫 노드 추가 및 head 노드
        else { 
            this.tail.next =  newNode; //현재 마지막 노드의 next가 새노드를 가리키게 한 후(1)
            newNode.prev = this.tail.next; //서로 연결
        }
        this.tail = newNode; // 마지막 노드로 추가(2)
        this.length ++;
    }
    getHead(){ 
       return this.head.value;
    }
    removeHead(){ //제일 위 카드 지우기
        this.head = this.head.next;
        this.head.prev = null;
        this.length--;
    }
    getSize(){
        return this.length;
    }
}

const list = new LinkedList();

for(let i=1; i<=input; i++) list.push(i);

while(list.getSize() > 1){
    list.removeHead();
    list.push(list.getHead());
    list.removeHead();
}

console.log(list.getHead());