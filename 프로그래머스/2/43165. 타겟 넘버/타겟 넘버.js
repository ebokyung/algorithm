function solution(numbers, target) {
    let result = 0;
    function dfs (sum, index) {
        if(index === numbers.length){
            if(sum === target) result += 1;
            return;
        }
        dfs(sum + numbers[index], index+1)
        dfs(sum - numbers[index], index+1)
    }
    dfs(0, 0);
    return result;
}
