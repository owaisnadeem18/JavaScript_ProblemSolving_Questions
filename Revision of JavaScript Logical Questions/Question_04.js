// 4. Check for Palindrome

// Write a function to check if a given string is a palindrome (reads the same backward as forward).

let str = "owais"

let FindPalindrome = (string) => {

    let splitted_str = string.split("")
    
    let reversedStr = ""
    
    // let mapped_str = splitted_str.map((item) => item )

    // return mapped_str

    for (let i = splitted_str.length -1 ; i>=0 ; i--) {
        reversedStr += splitted_str[i]
    }

    if (reversedStr == string) {
        return `${string} is a palindrome`
    } 
    else {
        return `${string} is not a palindrome`
    }
}

console.log(FindPalindrome(str))