// 5. Find the Second Largest Number in an Array
// Create a function that returns the second largest number in an array.

let arr = [3 , 56 ,2 , 543 , 542 , 98 , 42, 13, 54, 32]

let findSecondLargestNum = (array) => {

    // first sort the array and then find second largest number

    let sortArr = array.sort((a,b) => a-b)

    return sortArr[array.length-2]

}

console.log(findSecondLargestNum(arr))