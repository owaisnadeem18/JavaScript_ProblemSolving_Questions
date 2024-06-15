// Question_06

// Count Vowels: Write a function that counts the number of vowels in a given string.

let str = "Owais Nadeem";

let countVowels = (string) => {
  let vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

  let count_vowels = 0;

  for (let char of string) {
    if (vowels.includes(char)) {
      count_vowels++;
    }
  }
  return count_vowels;
};

console.log(countVowels(str));
