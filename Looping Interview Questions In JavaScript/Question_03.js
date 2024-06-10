// Question 03

// Print the following code

// 2  4  6  8  10
// 3  6  9  12 15
// 4  8  12 16 20
// 5  10 15 20 25

let rows = 4;
let columns = 5;

for (let i = 2; i <= 5; i++) {
  let rows_content = "";
  for (let j = 1; j <= columns; j++) {
    rows_content += ` ${j * i}`;
  }
  console.log(rows_content);
}
