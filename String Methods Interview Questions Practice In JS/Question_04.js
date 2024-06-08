// Question_04

// Here is a question in which we have to write a JavaScript function that accepts a string as a parameter and converts the first letter of this string as upperCase

let str = "my name is Owais nadeem";

function CapitalizeStr(string) {
  let AllWords = string.split(" ").map((word) => {
    return word.charAt(0).toUpperCase() + word.substring(1);
  });

  return AllWords.join(" ");
}

console.log(CapitalizeStr(str));
