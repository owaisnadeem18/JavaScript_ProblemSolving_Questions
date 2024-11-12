// 1. Reverse a String:

// Write a function that takes a string as input and returns the string reversed.


let str = "owais"

let ReverseStr = (string) => {

    let splitted_str = string.split("")
    let reversed_str = ""

    for (let i = splitted_str.length - 1 ; i >= 0 ; i--) {
        reversed_str += splitted_str[i]
    }

    return reversed_str
}

console.log(ReverseStr(str))