let str = "maham";

let reversed_str = "";

let checkPalind = (string) => {
  let string_splitted = str.split("");

  for (let i = string_splitted.length - 1; i >= 0; i--) {
    reversed_str += string[i];
  }

  return reversed_str == string ? "Palindrome" : "Not a Palindrome";
};

console.log(checkPalind(str));
