function solution(wallpaper) {
    const j = wallpaper[0].length; 
    const i = wallpaper.length;

    let [lux, luy, rdx, rdy] = [i,j,0,0];
    wallpaper.forEach((row, i )=> {
        row.split('').forEach((cell, j) => {
            if(cell === '#'){
                if(lux >= i) lux = i
                if(luy >= j) luy = j
                if(rdx <= i) rdx = i+1
                if(rdy <= j) rdy = j+1
            }
        })
    })
    return [lux, luy, rdx, rdy]
}