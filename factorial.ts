function factorial(n: number, accumulator: number = 1): number {
	if(n === 1) {
		return accumulator
    }
	return factorial(n - 1, n * accumulator)
}

console.log(factorial(5));
