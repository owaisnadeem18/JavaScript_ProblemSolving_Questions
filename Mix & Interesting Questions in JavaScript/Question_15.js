// 3. FizzBuzz

// Write a function that prints numbers from 1 to 20. For multiples of 3, print "Fizz", for multiples of 5, print "Buzz", and for multiples of both, print "FizzBuzz".

let printRequirements = () => {
    for (let i = 1 ; i < 21 ; i++) {
        if ( i % 3 == 0 && i % 5 == 0 ) {
            console.log("FizzBuzz")
            continue
        } 
        else if ( i % 3 == 0 ) {
            console.log("Fizz")
            continue
        }
        else if (i % 5 == 0 ) {
            console.log("Buzz")
            continue
        }
        else {
            console.log(i)
        }
    }
}

printRequirements()
console.log(printRequirements())