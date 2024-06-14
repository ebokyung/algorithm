// Run by Node.js
const readline = require('readline');

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	
	let N, stockInfo = []
	for await (const line of rl) {
		if(!N) N = +line;
		else stockInfo.push(line.split(' ').map(Number));
		if(stockInfo.length === N) rl.close();
	}
	solution(N, stockInfo);
	// process.exit();
})();

function solution(N, stockInfo) {
	let evaluationAmout = [];
	// let evaluationAmout = new Map();
	for(let i=0; i<N; i++){
		const [v,w] = stockInfo[i];
		let amount = Math.floor(v * w * 10) / 10;
		evaluationAmout.push([i+1, amount]);
		// evaluationAmout.set(i+1, amount);
	}
	const sorted = evaluationAmout.sort((a,b) => {
		if(a[1] == b[1]) return a[0] - b[0]
		else return b[1] - a[1]
	})
	return console.log(sorted.map(i => i[0]).join(' '))
}