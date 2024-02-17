const [N, NCards, M, MCards] = require('fs').readFileSync('/dev/stdin').toString().split("\n");
const map = new Map();
NCards.split(" ").map((n) => map.set(n, 1));
const answer = MCards.split(" ").map((n) => (map.has(n) ? 1 : 0));
console.log(answer.join(" "));