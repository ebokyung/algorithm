const readline = require('readline');
let rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

let N, K, map = [], bombs =[];

rl.on('line', (line) => {
	if(!N && !K) [N,K] = line.split(' ').map(Number);
	else if (map.length !== N) map.push(line.split(' '))
	else bombs.push(line.split(' ').map(Number))

	if(bombs.length === K) rl.close();
});

rl.on('close', () => {
	solution(N, K, map, bombs);
	process.exit();
})

function solution(N, K, map, bombs){
	// console.log(N, K, map, bombs)
	const direction = [[-1,0], [0,-1], [1,0], [0,1], [0,0]]
	const cntMap = Array.from({length: N}, () => Array(N).fill(0))
	// let max = Number.MIN_SAFE_INTEGER;
	for(let i=0; i<K; i++){
		const [y,x] = bombs[i]
		for(let [dy,dx] of direction){
			const ny = y - 1 + dy;
			const nx = x - 1 + dx;
			if(ny >= N || ny < 0 || nx >= N || nx < 0) continue;
			if(map[ny][nx] === '#') continue;
			else if(map[ny][nx] === '@') cntMap[ny][nx] += 2;
			else cntMap[ny][nx] += 1;
			// max = Math.max(max, cntMap[ny][nx])
			// console.log('[',y, x,']\n',cntMap.map(i => i.join('')).join('\n'))
		}
	}
	return console.log(Math.max(...cntMap.flat(2)))
}