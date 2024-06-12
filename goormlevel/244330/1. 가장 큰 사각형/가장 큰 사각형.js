// Run by Node.js
const readline = require('readline');

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	
	let T, squares = []
	for await (const line of rl) {
		if(!T) T = +line;
		else squares.push(line.split(' ').map(Number))
		
		if(squares.length === T) rl.close()
	}
	solution(T, squares)
	process.exit();
})();

function solution(T, squares){
	let max = Number.MIN_SAFE_INTEGER;
	
	squares.forEach(([w, h]) => max = Math.max(max, w * h))
	
	return console.log(max)
}