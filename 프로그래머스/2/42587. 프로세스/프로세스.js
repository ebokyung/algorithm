function solution(priorities, location) {
    let queue = priorities.map((priority, index)=>({
        priority,
        isTarget: index === location
    }));
    let nth = 0;       
    while(true){
        const curProcess = queue.shift();        
        if(queue.some(process => process.priority > curProcess.priority)) { 
            queue.push(curProcess); 
            continue;
        }                   
        nth++;
        if(curProcess.isTarget) return nth;
    }
}

// function solution(priorities, location) {
//     const first = Math.max.apply(null, priorities);
//     const firstProcess = priorities.indexOf(first);
//     const newPriorities = [...priorities];
//     newPriorities[location] = priorities[location] * -1;
//     const queue = [...newPriorities.slice(firstProcess), ...newPriorities.slice(0, firstProcess)];

//     let nth = 0;
//     while(queue.length){
//         const curProcessPriority = queue.shift();
//         if(Math.abs(curProcessPriority) >= Math.max(...queue.map(i => Math.abs(i)))) {
//             if(curProcessPriority < 0) return nth+1;
//             nth++;
//             continue;
//         }
//         queue.push(curProcessPriority);         
//     }
// }

// ['1', 1, 9, 1, 2, 1], 0
// [9, 1, 2, 1, '1', 1] // 1
// [ ,  , 2, 1, '1', 1, 1] // 2
// [ ,  ,  , 1, '1', 1] // 3
// [ ,  ,  ,  , '1', 1] // 4

// [1, 1, 9, '1', 2, 1], 0
// [9, '1', 2, 1, 1, 1] // 1
// [ ,  , 2, 1, 1, 1, '1']
// [ ,  , 2, 1, 1, 1, '1'] // 2
// [ ,  ,  , 1, '1', 1] // 3
// [ ,  ,  ,  , '1', 1] // 4