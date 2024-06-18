// Question_10

// Convert CamelCase to SnakeCase
// Aapko ek function likhna hai jo given camelCase string ko snake_case mein convert kare.

// let camel_case = "owaisNadeem";

// function camelCase(camel_case) {
//   let splitted_str = camel_case.split("");
//   splitted_str = splitted_str.map((item) => {
//     if (item >= 65 && item <= 90) {
//       return String.fromCharCode(item).toLowerCase();
//     }
//     return item;
//   });
//   return splitted_str;
// }

// console.log(camelCase(camel_case));

let str = "PakistanCricket";

function CamelCase(string) {
  let result = "";

  for (let i = 0; i < string.length; i++) {
    let char = string[i];

    if (char >= "A" && char <= "Z") {
      if (i > 0) {
        result += "_";
      }

      result += char.toLowerCase();
    } else {
      result += char;
    }
  }
  return result;
}

console.log(CamelCase(str));
