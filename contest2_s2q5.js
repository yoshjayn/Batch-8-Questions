function relativeSort(arr1, arr2) {
    // Step 1: Create a frequency map for arr1
    const frequencyMap = new Map();
    for (const num of arr1) {
        frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
    }

    // Step 2: Initialize the result array
    const result = [];

    // Step 3: Add elements from arr2 to the result array in their relative order
    for (const num of arr2) {
        if (frequencyMap.has(num)) {
            const count = frequencyMap.get(num);
            for (let i = 0; i < count; i++) {
                result.push(num);
            }
            frequencyMap.delete(num); // Remove the element from the map after processing
        }
    }

    // Step 4: Collect remaining elements not in arr2, sort them, and add to the result
    const remainingElements = [];
    for (const [num, count] of frequencyMap) {
        for (let i = 0; i < count; i++) {
            remainingElements.push(num);
        }
    }
    remainingElements.sort((a, b) => a - b); // Sort the remaining elements
    result.push(...remainingElements); // Append them to the result

    return result;
}

// Input handling
const n = 11, m = 4;
const arr1 = [2, 1, 2, 5, 7, 1, 9, 3, 6, 8, 8];
const arr2 = [2, 1, 8, 3];

// Compute the result
const result = relativeSort(arr1, arr2);

// Output the result
console.log(result.join(" ")); // Output: 2 2 1 1 8 8 3 5 6 7 9