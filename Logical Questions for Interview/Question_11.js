// Sort in ascending order without using built in sort method and also the original array should remain unchanged 

let arr = [3 , 8 ,4 ,1 , 89 , 43 , 21 , 1 , 53 ]

let sortAscending = (array) => {
    let sortedArr =  array.sort((a,b) => a-b)
    return [...new Set(sortedArr)]

}

console.log(sortAscending(arr))