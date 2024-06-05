// function solution(participant, completion) {
//     const hash = new Map();
//     participant.forEach(p => {
//         hash.set(p, hash.get(p) + 1 || 1)
//     })
//     completion.forEach(c => {
//         hash.set(c, hash.get(c) - 1)
//     })
//     for(let person of hash.entries()){
//         if(person[1] > 0) return person[0]
//     }
// }

function solution(participant, completion) {
    const map = new Map();

    for(let i = 0; i < participant.length; i++) {
        let a = participant[i], 
            b = completion[i]; // undefined

        map.set(a, (map.get(a) || 0) + 1);
        map.set(b, (map.get(b) || 0) - 1);
    }

    for(let [k, v] of map) {
        if(v > 0) return k;
    }

    return 'nothing';
}