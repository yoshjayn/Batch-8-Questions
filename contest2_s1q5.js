function sortByFrequency(nums) {
    // Step 1: Create a frequency map
    const frequencyMap = new Map();
    for (const num of nums) {
        frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
    }

    // Step 2: Sort the array based on frequency and value
    nums.sort((a, b) => {
        const freqA = frequencyMap.get(a);
        const freqB = frequencyMap.get(b);

        // Sort by frequency in increasing order
        if (freqA !== freqB) {
            return freqA - freqB;
        }

        // If frequencies are the same, sort by value in descending order
        return b - a;
    });

    return nums;
}

// Input handling
const n = 6;
const nums = [1, 1, 2, 2, 2, 3];

// Compute the result
const result = sortByFrequency(nums);

// Output the result
console.log(result.join(" ")); // Output: 3 1 1 2 2 2