/*
this is a sorting algorithm and it sorts an array in any order but no one uses this algorithm
in real world but it is good to start algorithms with.
*/

function bubbleSort(arr){
    let swapped
    do{
        swapped = false
        for(let i =0 ; i<arr.length ; i++){
            if(arr[i] > arr[i+1]){
                let temp = arr[i]
                arr[i] = arr[i+1]
                arr[i+1] = temp
                swapped = true
            }
        }
    }while(swapped)
    return arr;
}

const arr = [5,3,4,2]

console.log(bubbleSort(arr))

// the O(n) of this algorithm is is O(n2) because it is a nested loop