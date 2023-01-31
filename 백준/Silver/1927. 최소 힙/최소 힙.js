const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [n, ...arr] = require('fs').readFileSync(filePath).toString().trim().split("\n").map(i=>+i);

class minHeap {
  constructor() {
    this.nodes = [];
  }
  insert(data) {
    this.nodes.push(data); 
    this.bubbleUp(); 
  }
  extract() {
    const min = this.nodes[0]
    if (this.nodes.length === 1) {
        this.nodes.pop()
        return min
    }
    this.nodes[0] = this.nodes.pop()
    this.bubbleDown()
    return min
  }
  bubbleUp(index = this.nodes.length - 1) {
    let tmp = this.nodes[index]; 
    while (tmp < this.nodes[Math.floor((index-1) / 2)]) { //부모가 나보다 작을때까지
      this.nodes[index] = this.nodes[Math.floor((index-1) / 2)]; //부모를 내 자리로 끌어내려
      index = Math.floor((index-1) / 2); //내 인덱스를 부모 인덱스로 바꿔
    }
    this.nodes[index] = tmp;  //내자리가 될 부모인덱스에 나 넣음
  }
  bubbleDown(index = 0, length = this.nodes.length) {
    let tmp = this.nodes[index], child; //제일 아래있던(큰) 수가 루트에 올라온 상황
    while (index < Math.floor(length / 2)) { //??????
      child = index * 2 + 1; //왼쪽 자식
      if (child < length && this.nodes[child] > this.nodes[child + 1]) child++; //왼쪽 자식값이 오른쪽 자식값보다 크면, 오른쪽 선택 (값이 더 작은애를 (나랑 비교한 뒤) 부모로 올려야 하니까)
      if (tmp <= this.nodes[child]) break; //선택한 왼쪽 or 오른쪽 자식값이, 현재 노드값보다 크면 그만 (자기가 더 작으므로 위에 위치하는게 맞음)
      this.nodes[index] = this.nodes[child]; // 작으면 자식값이랑 바꾸기 (자식 올리고 자기가 내려가기)
      index = child; // 바뀐 내 자리에서 부모랑 체크해야하므로
    }
    this.nodes[index] = tmp;
  }
}

const heap = new minHeap()
let answer = [];
arr.forEach((item) => {
    if (item !== 0) {
        heap.insert(item);
    } else {
      heap.nodes.length === 0 ? answer.push(0) : answer.push(heap.extract());
    }
})

console.log(answer.join('\n'));
