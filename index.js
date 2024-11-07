// Part 1

// Loop through all numbers from 1 to 100.
for( let i = 1; i <= 100; i++){
    console.log(i)
}
// If a number is divisible by 3, log “Fizz.”
let  num= 21

while(num % 3 === 0){
    console.log("Fizz")
    break;
}

// If a number is divisible by 5, log “Buzz.”
let div5 = 20

while (div5 % 5 === 0){
    console.log("Buzz")
    break;
}

// If a number is divisible by both 3 and 5, log “Fizz Buzz.”
let divisible = 15

while( divisible % 3 === 0 && divisible % 5 === 0){
    console.log("Fizz Buzz")
    break;
}

// If a number is not divisible by either 3 or 5, log the number.
let n = 113

while( n % 3 !== 0 && n % 5 !== 0){
    console.log(n)
    break;
}