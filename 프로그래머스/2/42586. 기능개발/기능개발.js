function solution(progresses, speeds) {
    const result = [];
    const queue = progresses.map((val, index) => Math.ceil((100 - val) / speeds[index]))
    while(queue.length){
        const doneTask = queue.map((val) => val - queue[0]);
        let count = 0;
        for(let j in doneTask){
            if(doneTask[j] <= 0) { queue.shift(); count++; }
            else break;
        }
        result.push(count);
    }
    return result
}

// Math.ceil((100 - progresses) / speeds)
// [7, 3, 9]
// [0, -4, 2]


// [5, 10, 1, 1, 20, 1]
// [0, 5, -4, -4, 15, -4]
// [ , 0, -9, -9, 10, -9]
// [ ,  ,  0,  0, 19, 0]
// [ ,  ,   ,   ,  0, -19]
