// function myname() {
//   console.log(this);
// }

// // console.log(this);

// myname();
let obj = {
  MYnAME: "Owais Nadeem",
  Uni: "Dawood UET",
  Semester: "Final",
  getData: function () {
    console.log(this);
  },
};

obj.getData();
