/*

Write a JavaScript program to print numbers from 1 to 100 with the following conditions:

For numbers that are multiples of both 3 and 5, print "FizzBuzz" followed by the number.
For numbers that are multiples of 3 but not 5, print "Fizz" followed by the number.
For numbers that are multiples of 5 but not 3, print "Buzz" followed by the number.
For numbers that are neither multiples of 3 nor 5, print "No multiple of 3 or 5".

*/

for (let i = 1; i <= 100; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log("FizzBuzz", i);
    continue;
  }

  if (i % 3 == 0) {
    console.log("Fizz", i);
    continue;
  }

  if (i % 5 == 0) {
    console.log("Buzz", i);
    continue;
  }

  console.log("No multiple of 3 or 5");
}
