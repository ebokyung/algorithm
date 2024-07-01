// Run by Node.js
const readline = require('readline');

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	
	let N, M, houses, rainySeason = [];
	for await (const line of rl) {
		if(!N && !M) [N,M] = line.split(' ').map(Number);
		else if (!houses) houses = line.split(' ').map(Number);
		else rainySeason.push(line.split(' ').map(Number))
		if(rainySeason.length === M) rl.close()
	}
	
	solution(N, M, houses, rainySeason)
	process.exit();
})();


function solution(N, M, houses, rainySeason){
	let rainedHouses = new Set();
	for(let i=0; i<M; i++){
		const [s,e] = rainySeason[i];
		for(let j=s; j<=e; j++){
			houses[j-1] += 1;
			rainedHouses.add(j-1)
		}
		if((i+1) % 3 === 0){
			for(let houseIdx of rainedHouses.values()){
				houses[houseIdx] -= 1;
			}
			rainedHouses.clear()
		}
	}
	return console.log(houses.join(' '));
}


// function solution (N, M, houses, rainySeasons) {
// 	let rained = new Set()
// 	for(let i=0; i<M; i++){
// 		const [s,e] = rainySeasons[i];
// 		for(let j=s-1; j<e; j++){
// 			houses[j]++;
// 			rained.add(j)
// 		}
// 		if((i+1) % 3 === 0){
// 			for(let houseIdx of rained){
// 				houses[houseIdx]--;
// 			}
// 			rained.clear()
// 		}
// 	}
// 	console.log(houses.join(' '))
// }