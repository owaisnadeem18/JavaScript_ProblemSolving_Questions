// Question_11

// Problem: Extract the Domain Name from an Email Address

// "user@example.com" --- Output: "example.com"

let email = "owaisnadeem@ymail.com";

function Extract_Email(e) {
  let splitted_email = e.split("@");
  let splitted_domain = splitted_email[1].split(".");
  return splitted_domain;
}

console.log(Extract_Email(email));
