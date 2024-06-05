function solution(participant, completion) {
    const hash = new Map();
    participant.forEach(p => {
        hash.set(p, hash.get(p) + 1 || 1)
    })
    completion.forEach(c => {
        hash.set(c, hash.get(c) - 1)
    })
    for(let person of hash.entries()){
        if(person[1] > 0) return person[0]
    }
}