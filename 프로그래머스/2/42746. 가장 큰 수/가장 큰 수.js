function solution(numbers) {
    numbers.sort((a, b) => {
        const AB = a.toString() + b.toString();
        const BA = b.toString() + a.toString();
        return parseInt(BA) - parseInt(AB);
    })
    if (numbers[0] === 0) return '0';
    return numbers.join('');
}