
function cartesianProduct(set1 , set2){
    let sum = []
    for(let i = 0 ; i<set1.length ; i++){
        for(let j = 0 ; j<set2.length ; j++){
            sum.push([arr1[i] , arr2[j]])
        }
    }
    return sum
}

let arr1=[2,3]
let arr2 = [4,5,6]

console.log(cartesianProduct(arr1 , arr2))