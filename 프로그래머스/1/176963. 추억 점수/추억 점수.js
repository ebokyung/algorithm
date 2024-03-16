function solution(name, yearning, photo) {
   const yearningDB = {}
   name.forEach((n, index) => {
       yearningDB[n] = yearning[index]
   })

    const result = []
    photo.forEach(p => {
        const sum = p.reduce((acc, cur) => {
            return acc + (yearningDB[cur] ?? 0)
        }, 0)
        result.push(sum)
    })

    return result;
}