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

const num = 9;
let fact = 1;

for(i=1; i<= num; i++){
    fact *= i;
}

console.log(fact);
