function firstRecurring(arr) {
    const seenNumbers = new Set(); // Create a set to store the numbers we encounter
    
    for (let i = 0; i < arr.length; i++) {
        if (seenNumbers.has(arr[i])) {
            return arr[i]; // Return the number if it's already in the set (first recurring number)
        }
        seenNumbers.add(arr[i]); // Add the number to the set
    }
    
    return null; // If no recurring number is found, return null
}

// Example usage:
console.log(firstRecurring([2, 5, 1, 2, 3, 5, 1, 2, 4])); // Output: 2
console.log(firstRecurring([2, 4, 6, 8]));                // Output: null
