// Question_13

// Find the Longest Word in a Sentence

let sentence = "My Name is Muhammad Owais Nadeem";

let FindLargest = (sent) => {
  let largest = "";

  sent = sent.split(" ");

  for (let i = 0; i < sent.length; i++) {
    if (sent[i].length > largest.length) {
      largest = sent[i];
    }
  }

  return largest;
};

console.log(FindLargest(sentence));
