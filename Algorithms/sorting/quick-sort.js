/*
the quick sort is an efficient algorithm based on the divide and conquer approach 
it wokrs by choosing a pivot(محور) and partioning the array into 2 sub-arrays left and right
then we compare the pivot with all the all elements and if the element is greather than the pivot
push that element to the left array and if it is not push the element to the right array 
and the case to stop looping over the array is this condition
if(arr.length < 2){
    return arr
}
*/

function quickSort(arr){
    if(arr.length < 2){
        return arr
    }

    let pivot = arr[arr.length-1]
    let left = []
    let right = []

    for(let i = 0 ; i<arr.length-1 ; i++){
        if(arr[i] > pivot){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }


    return [...quickSort(right) , pivot , ...quickSort(left)]
}

const arr=[15,8,10,3,2]
console.log(quickSort(arr))

// the O(n) of this algorithm is O(n logn)