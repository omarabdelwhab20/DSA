/*
this sorting algorithm divides the array into sorted and un sorted part like assuming
that the first element is sorted and the rest of the elements are unsorted
then we start to compare between the unsorted part and sorted part and move them into its right
positions untill the array is sorted
*/


function insertionSort(arr){
    for (let i = 1; i < arr.length; i++) {
        let elementToInsert = arr[i]
        let j = i-1


        while(j>=0 && arr[j] > elementToInsert){
            arr[j+1]=arr[j]
            j--
        }
        arr[j+1] = elementToInsert
    }
    return arr;
}

const arr = [10,12,3,5,1]
console.log(insertionSort(arr))