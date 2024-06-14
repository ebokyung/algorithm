// Run by Node.js
const readline = require('readline');

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	
	let N, T, busSchedules = [];
	for await (const line of rl) {
		if(!N && !T) [N,T] = line.split(' ').map(Number);
		else busSchedules.push(line.split(' ').map(Number))
		if(busSchedules.length === N) rl.close();
	}
	findEarliestBus(N,T,busSchedules)
	process.exit();
})();

function findEarliestBus(N,T, busSchedules) {
	const departureTimeArr = []
	for(let i=0; i<N; i++){
		const [s,d] = busSchedules[i]
		
		let find = false;
		let turnCnt = 0;
		let temp;
		while(!find){
			temp = s + d * turnCnt++;
			if(temp >= T) {
				departureTimeArr.push(temp)
				find = true;
			}
		}
	}
	
	const earliestBus = departureTimeArr.indexOf(Math.min(...departureTimeArr)) + 1
	return console.log(earliestBus)
}
