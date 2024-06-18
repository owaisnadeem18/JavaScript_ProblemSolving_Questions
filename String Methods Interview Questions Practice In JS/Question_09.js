// Question_09

// Capitalize the First Letter of Each Word

// Aapko ek function likhna hai jo given string ke har word ka pehla letter capitalize kare.

// let str = "my name is owais nadeem";

// function CapitalizeStr(string) {
//   let splitted = string.split(" ");
//   let capitalize = splitted.map((item) => {
//     return item[0].toUpperCase() + item.substring(1);
//   });
//   return capitalize.join(" ");
// }

// console.log(CapitalizeStr(str));

// ----------------------------------------------------------------------------------

// Repractice the same question ...

let sentence = "js is just simply love to code";

function Capitalize(sent) {
  let splitted_str = sent.split(" ");

  let desired_str = splitted_str.map((e) => {
    return e[0].toUpperCase() + e.substring(1);
  });

  return desired_str.join(" ");
}

console.log(Capitalize(sentence));
