// Fabonacci

// function fibonacci(num){
//     let fibo = [0,1];

//     for(let i = 2; i <= num; i++){
//         fibo[i] = fibo[i-1] + fibo[i-2];
//     }
//     return fibo;
// }

// console.log(fibonacci(5));

// recusrive way ******************

// function fabo(n){
//     if(n == 0){
//         return 0;
//     }
//     if(n == 1){
//         return 1;
//     }
//     else{
//         return fabo(n-1) + fabo(n-2);
//     }
// }

// const res = fabo(10)

// console.log(res);

// Fabonacci in a series 

// [0,1,1,2,3,5,8,13,21,34....+n]

function fibo(n){
    if(n == 0){
        return [0];
    }
    else if ( n== 1){
        return [0,1];
    }
    else{
        // calculate the n-th element
        let fab = fibo(n-1);
        let nextElement = fab[n-1] + fab[n-2]
        fab.push(nextElement);
        return fab;
    }
}

console.log(fibo(10));