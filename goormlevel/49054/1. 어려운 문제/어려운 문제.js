// Run by Node.js
const readline = require('readline');

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	
	for await (const line of rl) {
		solution(+line)
		rl.close();
	}
	
	process.exit();
})();

function solution(N) {
	let A = BigInt(1);
	
	for(let i=1; i<=N; i++){
		A *= BigInt(i);
	}
	
	while(A > 10){
		A = String(A).split('').reduce((acc, cur) => acc += BigInt(cur), BigInt(0)) 
	}
	
	return console.log(String(A))
}