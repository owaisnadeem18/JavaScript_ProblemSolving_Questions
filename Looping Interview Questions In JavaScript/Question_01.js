// Looping Question # 01

// Print the following pattern

// *
// **
// ***
// ****
// *****

for (let i = 1; i <= 5; i++) {
  let star = "";
  for (let a = 1; a <= i; a++) {
    star += "*";
  }
  console.log(star);
}
