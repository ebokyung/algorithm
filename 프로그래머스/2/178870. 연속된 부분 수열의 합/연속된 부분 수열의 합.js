const solution = (sequence, k) => {
    const answer = [];
    let sum = 0;
    let left = 0;
    let right = 0;
    while(right <= sequence.length){
        if(sum === k){
          answer.push([left, right-1, right-1-left])
          sum -= sequence[left]
          left++
        }else if(sum < k){
          sum += sequence[right]
          right++
        }else if(sum > k){
          sum -= sequence[left]
          left++
        }
    }
    answer.sort((a,b) => a[2]-b[2])
    return answer[0].slice(0,2)
};