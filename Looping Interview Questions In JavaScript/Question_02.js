// Question_02

// Here, we have to print the following pattern:

// *****
// ****
// ***
// **
// *

for (let i = 5; i >= 1; i--) {
  let star = "";

  for (let j = 1; j <= i; j++) {
    star += "*";
  }

  console.log(star);
}
