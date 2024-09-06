let n = Number(prompt("Enter any number"));
let count = 0;

function FindNaturalNumSum(number) {
  for (let i = 1; i <= number; i++) {
    count += i;
  }

  return count;
}

console.log(FindNaturalNumSum(n));
