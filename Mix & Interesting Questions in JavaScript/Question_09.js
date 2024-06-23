function func() {
  console.log(b);
  var b = "Owais"; // whenever, we use var 'b' as variable , then we can print it before it's definition , because the variable with data type of 'var' hoisted at the top

  let a = 56;
  console.log(a);
}

func();
