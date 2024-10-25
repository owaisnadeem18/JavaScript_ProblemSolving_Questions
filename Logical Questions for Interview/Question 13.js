// Question 13

function countOccurrences(str) {
  const occurrences = {}; // Empty object to store counts

  // Loop through each character in the string
  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    // Check if the character is already in the object
    if (occurrences[char]) {
      occurrences[char]++;
    } else {
      occurrences[char] = 1;
    }
  }

  return occurrences;
}

// Example
const str = "owais has";
console.log(countOccurrences(str));
