function factorial(num) {
	if ( num === 0 ) 
		return 1;
	return num * factorial(num-1);
}

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

readline.question(`Enter the number: `, (num) => {
  console.log(`${num}! = ${factorial(num)}`)
  readline.close()
})
