// prime number 

function isPrime(n){
    for(let i = 2; i < n; i++){
        if(n%i == 0){
            return n+" Is Not a Prime Number"
        }
    }
    return n+" is a Prime number"
}

const res = isPrime(7);
console.log(res);