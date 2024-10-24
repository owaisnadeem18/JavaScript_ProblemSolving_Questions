// Question # 12 
// Find The non repeating element in a string

let a = "aabbccd"

function FindNonRepeating(str) {

    let obj = {}
    let char

    for (let i = 0 ; i<str.length ; i++ ) {
        char = str[i]

        if (obj[str]) {
            obj[char]++
        }

        else {
            obj[char] = 1
        }
    }   

    for (let i = 0 ; i<str.length ; i++) {
        if (obj[char[i]] == 1) {
            return char[i]
        }
    }


    return null

}

console.log(FindNonRepeating(a))