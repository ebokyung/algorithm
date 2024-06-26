function solution(sizes) {    
    const sorted = [...sizes].map(([w,h]) => {
        return w < h ? [h,w] : [w,h]
    })
    
    let maxWidth = Number.MIN_SAFE_INTEGER;
    let maxHeight = Number.MIN_SAFE_INTEGER;
    sorted.forEach(size => {
        maxWidth = Math.max(maxWidth, size[0])
        maxHeight = Math.max(maxHeight, size[1])
    })

    return maxWidth * maxHeight;
}