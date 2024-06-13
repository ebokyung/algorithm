const readline = require('readline');
let rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});
let N, string = '';
rl.on('line', (line) => {
	if(!N) N = +line;
	else string = line;
	if(string.length === N) rl.close();
});

rl.on('close', () => {
	solution(N, string)
	process.exit()
})

function solution(N, string){
	const substrings = []
	for(let i=0; i<N; i++){
		for(let j=i+1; j<N-1; j++){
			const first = string.slice(0, i+1);
			const second = string.slice(i+1,j+1);
			const third = string.slice(j+1);
			substrings.push([first, second, third])
		}
	}
	const set = new Set(substrings.flat(2))
	const dictionary = new Map()
	Array.from(set.values()).sort().forEach((str, idx) => {
		dictionary.set(str, idx+1)
	})
	let max = Number.MIN_SAFE_INTEGER;
	for(let substr of substrings){
		const sum = substr.reduce((acc, cur) => acc += dictionary.get(cur), 0)
		max = Math.max(max, sum)
	}
	return console.log(max)
}