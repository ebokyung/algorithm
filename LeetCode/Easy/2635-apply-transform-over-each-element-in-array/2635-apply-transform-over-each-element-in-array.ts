function map(arr: number[], fn: (n: number, i: number) => number): number[] {
    const newArray = []
    arr.forEach((value, i) => newArray.push(fn(value, i)))
    return newArray
};