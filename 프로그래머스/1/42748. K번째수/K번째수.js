function solution(array, commands) {
    return commands.map((cmd, index) => {
        const [i, j, k] = cmd;
        const subArray = [...array].slice(i-1, j);
        const sortedSubArray = [...subArray].sort((a,b) => a-b);
        return sortedSubArray[k-1];
    })
}