// Question_04

// 5. Write a JavaScript for loop that iterates from 0 to 15. For each iteration, it checks if the current number is odd or even, and displays a message on the screen.

for (let i = 1; i <= 15; i++) {
  if (i % 2 == 0) {
    console.log(`${i} -> even`);
  } else {
    console.log(`${i} -> odd`);
  }
}
