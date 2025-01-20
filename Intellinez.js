function printExactZigzagPattern(s, numRows) {
    if (numRows === 1 || s.length <= numRows) {
        console.log("Output:", s); // No zigzag needed if only one row or the string is short
        return;
    }

    // Create an array of empty strings to represent rows
    const rows = Array.from({ length: numRows }, () => "");
    let currentRow = 0;
    let goingDown = false;

    // Build rows in a zigzag pattern
    for (let i = 0; i < s.length; i++) {
        rows[currentRow] += s[i];

        // Add spaces to rows that aren't currently being populated, ensuring the visual alignment of characters.
        for (let j = 0; j < numRows; j++) {
            if (j !== currentRow) rows[j] += " ";
        }

        // Switch direction at the top and bottom rows
        if (currentRow === 0 || currentRow === numRows - 1) {
            goingDown = !goingDown;
        }

        currentRow += goingDown ? 1 : -1;
    }

    // Print the rows for the visual zigzag pattern
    rows.forEach(row => console.log(row.trimEnd()));

    // Create the final output string
    const outputString = rows.map(row => row.replace(/\s+/g, "")).join("");
    console.log("Output:", `"${outputString}"`);
}

// Example Usage
// printExactZigzagPattern("PAYPALISHIRING", 3);
printExactZigzagPattern("yasHasWinI1", 3);

/*
Pattern Output:
P     A     H     N
 A   P L   S I   I G
  Y     I     R

Output: "PAHNAPLSIIGYIR"
*/

// printExactZigzagPattern("PAYPALISHIRING", 4);
/*
Pattern Output:
P       I       N
 A     L S     I G
  Y   A   H   R
   P       I

Output: "PINALSIGYAHRPI"
*/
