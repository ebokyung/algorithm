// Run by Node.js
const readline = require('readline');

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	
	let N, data=[];
	
	for await (const line of rl) {
		if(!N) N = +line;
		else data.push(line.split(' '));
		
		if(data.length === N) rl.close();
	}
	solution(N, data);
	process.exit();
})();

function solution (N, data) {
	let answer = 'success';
	const account_book = new Map();
	account_book.set('in', 0)
	account_book.set('out', 0)
	for (let [c, v] of data) {
		if(c === 'out') {
			if(account_book.get('in') < account_book.get('out') + parseInt(v)) {
				answer = 'fail'
				break;
			}
			account_book.set('out', account_book.get('out') + parseInt(v))
		} else account_book.set('in', account_book.get('in') + parseInt(v))
	}
	return console.log(answer)
}
