//q1.print the pattern

// 1
// 121
// 12321
// 1234321

for(let i=1; i<=4; i++){
    let str=""
    for(let j=1; j<=i; j++){
        str+=j
    }
    for(let j=i-1;j>=1;j--){
        str+=j
    }
    // console.log(str)
}


// lower one is sir's approach, try to complete it with 2 loops only.
  
for (let row = 1; row <= 4; row++) {
    let str = "";
    let elem = 1;
    for (; elem <= 2 * row - 1; elem += 2) {
        str += Math.ceil(elem / 2); // Incremental numbers
    }
    for (elem -= 2; elem > 1; elem -= 2) {
        str += Math.ceil(elem / 2) - 1; // Decremental numbers
    }
    // console.log(str);
}

// row determines the current row and the maximum number in that row.
// elem represents positions (odd numbers: 1, 3, 5, etc.) to calculate values.
// Math.ceil(elem / 2) maps elem to numbers for both increasing and decreasing sequences.
// Incremental phase builds the left side of the pattern.
// Decremental phase mirrors it to form the complete row.












//------------------------------------------------------------------

//q2. Count Trailing Zeros (Without String Conversion)

let num = 123450
let cnt=0
// console.log(typeof(num[0]))
while(num>0){
    let last = num%10
    if(last==0) {
        cnt++
        num = parseInt(num/10)
    }
    else if(last != 0) break;
}

// console.log(cnt)












//------------------------------------------------------------------

//q3. First Repeating Character
//Given a string s, write a function to find and print the first character that repeats in the string. The function should return 
// the first character that appears more than once when traversing the string from left to right.

let str="yashaswini"
let set = new Set()
function processString(str){
    for(let i=0;i<str.length;i++){
        if(set.has(str[i])) {
            console.log(str[i])
        break
        }
        if( !set.has(str[i])) set.add(str[i])
    }
}
// processString(str);


//my attempt-

// let stri = "aabbcc"
// let map = new Map()
// for(let s of stri){
// if(map.has(t)){
//     map.set(s,(map.get(s)+1))
// }
// }
  








//------------------------------------------------------------------

//q4: Find the Square Root Using Binary Search
//Write a program to find the square root of a given non-negative number n using binary search. If the square root is an integer, 
//return it. Otherwise, return the floor value of the square root (the largest integer less than or equal to the actual square root).

// In relevance with floor-ceil question discussed in class :)
function findSquareRoot(n) {
    if (n < 0) {
      throw new Error("Input must be a non-negative integer."); // Handle invalid input
    }
  
    if (n === 0 || n === 1) return n; // Handle edge cases for 0 and 1
  
    let left = 0;
    let right = n;
    let result = 0;
  
    while (left <= right) {
      let mid = Math.floor(left + (right - left) / 2);
      let square = mid * mid;
  
      if (square === n) {
        return mid; // Perfect square case
      } else if (square < n) {
        result = mid; // Store the current mid as a possible answer
        left = mid + 1; // Move to the right half
      } else {
        right = mid - 1; // Move to the left half
      }
    }
  
    return result; // Return the floor value of the square root
  }
  
//   console.log(findSquareRoot(25))



















//------------------------------------------------------------------

//q5.Check Unique Character Frequencies
//Write a program to determine if all characters in a given string have the same frequency of occurrences. The program should return true if every character appears an equal number of times, and false otherwise.

let s = "aabbcc"
function hasEqualFrequencies(s) {
    const frequencyMap = new Map();
  
    for (const char of s) {
      frequencyMap.set(char, (frequencyMap.get(char) || 0) + 1);
    }
  
    const frequencies = new Set(frequencyMap.values());
  
    return frequencies.size === 1;
  }

// console.log(hasEqualFrequencies("aabcc"))


















//------------------------------------------------------------------

//q6: Write a function LongestEqualSubarray(arr) that takes an array of integers containing only 0s and 1s as input. 
// The function should return the length of the longest contiguous subarray that has an equal number of 0s and 1s.

let arr=[1, 0, 1, 0, 0, 1, 0, 1]  //expected - 8
// let arr=[0, 1, 0, 1, 0, 1, 1]  //expected - 6
// let arr=[1, 1, 0, 0, 1, 0, 1]  //expected - 4
// let arr=[0, 0, 0, 1, 1, 1, 0, 1]          - 6

function longestEqualSubarray(arr) {
    const map = new Map();
    let maxLength = 0, cumulativeSum = 0;

    for (let i = 0; i < arr.length; i++) {
        cumulativeSum += arr[i] === 0 ? -1 : 1; // If cumulativeSum is 0, the subarray from the start to the current index has 
                                                // equal 0s and 1s
        if (cumulativeSum === 0) {
            maxLength = i + 1;
        }

        if (map.has(cumulativeSum)) {
            maxLength = Math.max(maxLength, i - map.get(cumulativeSum));
        } else {
            map.set(cumulativeSum, i);
        }
    }

    return maxLength;
}

// console.log(longestEqualSubarray(arr));















//------------------------------------------------------------------

//q7: Write a function nestedArray Sum (arr) that calculates the sum of all numbers in a nested array. The array can
// contain integers or other arrays (which themselves can be nested to any depth).


let input = [1,2,[3,4],[5,[6,7]]]
//expected output = 1+2+3+4+5+6+7 = 28

function nestedArraySum(arr) {
    let sum = 0;

    for (let element of arr) {
        if (Array.isArray(element)) {

            sum += nestedArraySum(element);
        } else if (typeof element === 'number') {

            sum += element;
        }
    }

    return sum;
}
// console.log(nestedArraySum(input))
















//------------------------------------------------------------------

//q8: Write a function secondLargest (arr) that takes an array of integers as input and returns the second largest number in the array. 
// If there is no second largest number (e.g., all elements are the same or the array has fewer than 2 elements), return null.

{
// let array = [1,2,3,4,5,6]

// let max = Math.max(...array)

// array.pop(max)

// let max2 = Math.max(...array)
//  console.log(max2)
}

function secondLargest(arr) {
    if (arr.length < 2) return null; // If fewer than 2 elements, return null

    let largest = -Infinity;
    let secondLargest = -Infinity;

    for (let num of arr) {
        if (num > largest) {
            // Update largest and shift the previous largest to second largest
            secondLargest = largest;
            largest = num;
        } else if (num > secondLargest && num < largest) {
            // Update second largest if current number is between largest and second largest
            secondLargest = num;
        }
    }

    // If secondLargest remains -Infinity, it means no second distinct value
    return secondLargest === -Infinity ? null : secondLargest;
}


// console.log(secondLargest([10, 20, 30, 40, 50])); // Output: 40
