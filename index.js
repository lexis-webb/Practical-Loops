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
let z = 113

while( z % 3 !== 0 && z % 5 !== 0){
    console.log(z)
    break;
}

// Part 2
// Declare an arbitrary number, n.
// Create a loop that searches for the next prime number, starting at n and incrementing from there.
// As soon as you find the prime number, log that number and exit the loop.


function PrimeNum (num){
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0 ) return false;

    
    for (let p = 5; p * p <= n; p += 6){
        if (num % p === 0 || num % (p + 2) === 0) return false;
    }
    return true;
}
function nextNum (n){
    let num = n;
    while (true){
        if (PrimeNum(num)){
            console.log(num);
            break;
        }
        num ++;
    }
}   
let n = 12
nextNum(n);

