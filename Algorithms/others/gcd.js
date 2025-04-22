
function euclidGCD(a,z){
    let gcd
    if(a ===z ){
        gcd = a
    }
    else if(a > z){
        gcd = euclidGCD((a-z) , z)
    }else if(a<z){
        gcd = euclidGCD(a , (z-a))
    }

    return gcd
}


console.log(euclidGCD(48 , 18))



function gcd(a, b) {
    while (b !== 0) {
        [a, b] = [b, a % b];
    }
    return a;
}

console.log(gcd(48, 18)); 