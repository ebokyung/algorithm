function map(arr: number[], fn: (n: number, i: number) => number): number[] {
    return arr.map((value, i) => fn(value, i))
};