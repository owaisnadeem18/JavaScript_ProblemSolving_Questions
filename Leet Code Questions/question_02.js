// Given an array of integers nums and an integer target, return the indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// Example:
// Input: nums = [2, 7, 11, 15], target = 9
// Output: [0, 1]
// Explanation: nums[0] + nums[1] = 2 + 7 = 9, so the indices are [0, 1].

function twoSum(nums, target) {
  // Create a hash map to store numbers and their indices
  const map = {};

  // Iterate through the array
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    // Check if the complement exists in the map
    if (map.hasOwnProperty(complement)) {
      // Return the indices of the current number and its complement
      console.log([map[complement], i]);
      return [map[complement], i];
    }

    // Store the current number and its index in the map
    map[nums[i]] = i;
  }

  // If no solution is found, return an empty array or handle as needed
  return [];
}

// Example usage
let nums = [2, 7, 11, 15];
let target = 9;
console.log(twoSum(nums, target)); // Output: [0, 1]
