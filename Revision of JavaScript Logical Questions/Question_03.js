// 3. Count Occurrences of a Character
// Create a function that counts how many times a specific character appears in a string.

// Question_03

let str = "Owais Nadeem"

let countOccurences = (string) => {
    let StringOccObj = {}

    let splitted_str = string.trim().toLowerCase().split("")
    splitted_str.map((item) => {
        if (StringOccObj[item]) {
            StringOccObj[item]++
        }
        else {
            StringOccObj[item] = 1
        }
    })

    return StringOccObj

}

console.log(countOccurences(str))