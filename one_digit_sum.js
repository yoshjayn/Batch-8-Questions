

// 199 => 19 => 10 => 1

// 179 =>17 => 8 => 1

// 101 => 2

// Write a program that repeatedly sums the digits of a number until the result is a single digit.

let n = 101

while(n>=10){

    let sum = 0
    while(n>0){
        let last = n%10;
        sum += last;
        n = Math.floor(n/10);
    }

    // n = 0
    // sum = 19, 10,1
    n = sum;

}

console.log(n)