// Run by Node.js

const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});
let string;
rl.on("line", function(line) {
	string = line;
	rl.close();
}).on("close", function() {
	solution(string)
	process.exit();
});

function solution(string) {
	let max = Number.MIN_SAFE_INTEGER;
	
	for(let i=0; i<string.length; i++){
		for(let j=i; j<string.length; j++){
			const substring = string.slice(i, j+1)
			if(checkIsPalindrome(substring)){
				max = Math.max(max, substring.length);
			}
		}
	}
	
	return console.log(max);
}

function checkIsPalindrome(string){
	let isPalindrome = true;
	for(let i=0; i<Math.floor(string.length/2); i++){
		if(string[i] !== string[string.length - 1 - i]) {
			isPalindrome = false;
			break;
		}
	}
	return isPalindrome;
}