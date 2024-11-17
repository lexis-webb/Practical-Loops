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

// Loop through the characters of a given CSV string.
// Store each “cell” of data in a variable.
// When you encounter a comma, move to the next cell.
// When you encounter the “\r\n” sequence, move to the next “row.”
// Log each row of data.


function loopThrough(csvString) {
    const rows = [];
    //split into rows
    csvString.split(/\r?\n/).forEach(row => {
        const cells = row.split(',');
        rows.push(cells);
    });
    
    // Log each row
    rows.forEach(row => console.log(row));
}
let csvString = "Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232"
loopThrough(csvString);