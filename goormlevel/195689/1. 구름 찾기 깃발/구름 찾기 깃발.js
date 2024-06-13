const readline = require('readline');
let rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});
let N, K, map = []
rl.on('line', (line) => {
	if(!N && !K) [N,K] = line.split(' ').map(Number)
	else map.push(line.split(' ').map(Number))
	if(map.length === N) rl.close();
});

rl.on('close', () => {
	solution(N,K,map)
	process.exit()
})

function solution(N,K,map){
	const direction = [
		// 상하좌우
		[-1,0],
		[1,0],
		[0,-1],
		[0,1],
		// 대각선
		[-1,-1],
		[-1,1],
		[1,-1],
		[1,1]
	]
	
	for(let r=0; r<N; r++){
		for(let c=0; c<N; c++){
			if(map[r][c] === 1) continue;
			for(let [dr, dc] of direction){
				const nr = r + dr;
				const nc = c + dc;
				if(nr < 0 || nr >= N || nc <0 || nc >= N) continue;
				if(map[nr][nc] === 1) map[r][c] -= 1
			}
		}
	}
	
	return console.log(map.flat(2).filter(value => value * -1 === K).length)
}
