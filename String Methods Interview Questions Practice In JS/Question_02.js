// Question_02

// String Methods Interview Questions:

// Check either the string entered by the user is palindrome or not ??

let str = prompt("Please enter a string");

isPalindrome = (string) => {
  let reversedStr = string.split("").reverse().join("");

  if (reversedStr == string) {
    return `The entered string is a palindrome , the string is ${string} `;
  } else {
    return `The entered string is not a palindrome , the string is ${string} `;
  }
};

if (isNaN(str)) {
  console.log(isPalindrome(str));
} else {
  alert("Please Enter a valid Input String");
}
