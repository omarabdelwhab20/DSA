const arr = [1,2,4,"Omar" , true]
arr.push('s') // adds an element to the end of the array
arr.unshift(0) // adds an element to the start of the array
arr.pop() // remove the last element of an array
arr.shift() // remove the first element of the array and returns it


let newArr = arr.map((item => item*2))
console.log(newArr)

console.log(arr)


let filtertedArr = arr.filter((item =>item%2 ==0))

console.log(filtertedArr)

const nums = [1,2]

let sum = nums.reduce((last , current) => last-current )
console.log(sum)

let arr1=[1,2]
let arr2=[3,4]

let combinedArr = arr1.concat(arr2)
console.log(combinedArr)

let fullArr = [10,20,30,40,50,60,70]

let slicedArr = fullArr.slice(0,4)
console.log(slicedArr)


let originlaArr = [1,2,3,4,5,6]

originlaArr.splice(1 , 1 , 100)

console.log(originlaArr)