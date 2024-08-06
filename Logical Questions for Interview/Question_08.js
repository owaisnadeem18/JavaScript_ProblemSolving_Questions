// Write a function to print the following pattern:
// *
// **
// ***
// ****
// *****

for (let i = 0; i < 5; i++) {
  let str = "";

  for (let j = 0; j <= i; j++) {
    str += "*";
  }

  console.log(str);
}
