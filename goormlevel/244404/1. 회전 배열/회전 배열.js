// Run by Node.js
const readline = require('readline');

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	
	let N = null, M = null, data = [];
	
	for await (const line of rl) {
		if(!N){
			[N,M] = line.split(' ').map(i => +i)
		} else{
			data.push(...line.split(' '))
			if(data.length === N){
				rl.close();
			}
		}
	}
	
	solution(N, M, data);
	process.exit();
})();

function solution (N, M, sequence) {
	if(N === 1) {
		return console.log(sequence[0]);
	}
	
	let start_index = 0;
	for(let i=0; i<M; i++){
		const move = +sequence[start_index];
		start_index = (start_index + move) % N;
	}
	return console.log(sequence[start_index])
}