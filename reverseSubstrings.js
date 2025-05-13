function reverseParentheses(s) {
    let arr = [];

    for (let char of s) {
        if (char === ')') {
            // Collect characters until the last '('
            let temp = [];
            while (arr[arr.length - 1] !== '(') {
                temp.push(arr.pop());
            }
            arr.pop(); // Remove the '('
            // Push reversed content back
            arr.push(...temp);
        } else {
            arr.push(char);
        }
    }

    return arr.join('');
}

console.log(reverseParentheses("(accio(job))"));  // joboicca
