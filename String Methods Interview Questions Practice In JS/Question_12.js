let myString = "My name is Owais Nadeem";

let LargestNum = (str) => {
  let largest_num = "";
  str.split(" ").map((val) => {
    if (val.length > largest_num.length) {
      largest_num = val;
    }
  });

  return largest_num;
};

console.log(LargestNum(myString));

let b = "I am doing BSCS from Dawood UET";

function FindSmallest(string) {
  let smallest_num = string;
  string.split(" ").forEach((item) => {
    if (item.length < smallest_num.length) {
      smallest_num = item;
    }
  });
  return smallest_num;
}

console.log(FindSmallest(b));
let name = "My name is Owais Nadeem";

let largestNumber = (str) => {
    let
};
