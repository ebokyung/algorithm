const arr = new Array(10000).fill(true);
let sum = 0;
for(let i=1; i<=arr.length; i++){
    sum = i +Math.floor(i/1000) + Math.floor(i%1000/100) + Math.floor(i%100/10) + i%10;
    if(sum <= 10000) arr[sum-1] = false;
    else continue;
}
for(let j=0; j<arr.length; j++){
    if(arr[j]){
        console.log(j+1);
    }
}