function factorial(num) {
	let res = 1;
	for ( let i = 1; i <= num; i++)
		res *= i;
	return res;
}

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

readline.question(`Enter the number: `, (num) => {
  console.log(`${num}! = ${factorial(num)}`)
  readline.close()
})
