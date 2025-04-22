/*
binary search is a searching algorithm based on divide and conquer technique and must search
through a sorted array
and it is simply work as following
we start from the middle and we have 2 pointers one pointing at the start index of array 
and the other pointing at the end index of the array
then we compare the middle element with the target value if the mid > target
we modify the end pointer to be mid - 1 so we divide the array into half
*/ 


function binarySearch(array ,target){
    let start = 0
    let last = array.length-1
    for(let i = 0 ; i<array.length ; i++){
        

        let mid = Math.floor((start+last)/2)

        if(array[mid] === target){
            return mid
        }

        if(array[mid] > target){
            last = mid - 1
        }else{
            start = mid + 1
        }
    }
    return -1

}


console.log(binarySearch([1,2,3,4,5],5))

// the O(n) of this algorithm is logn