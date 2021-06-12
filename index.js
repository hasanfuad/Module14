//convert inch to feet

function inchTofeet(inch){
    var feet = inch/12;
    return feet;
}

var convertedFt = Math.round(inchTofeet(80));
console.log(convertedFt +" Ft");


// let const 

let vary = 23; //changable
const vary2 = 33; //unchanglable

// leap year 

var year = 2025;

if(year%400==0){
    console.log("Leap year");
}
else if (year % 100 != 0 && year % 4 == 0){
    console.log("Leap Year");
}

else{
    console.log("Not Leap Year");
}

// Factorial

// const num = 9;
// let fact = 1;

// for(i=1; i<= num; i++){
//     fact *= i;
    // console.log(i+" X "+ fact);
// }

// factorial with while loop

// function factorial(num){
//     let i = 1;
//     let fact = 1;
//     while(i <= num){
//         fact *= i;
//         i++;
//     }
//     return fact;

// }

// const res = factorial(10);

// console.log(res);

function recursiveFactorial(num){

    if(num == 0){
        return 1;
    }
    else{
        return num * recursiveFactorial(num - 1);
    }
}

const res = recursiveFactorial(6);
console.log(res);