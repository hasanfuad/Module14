//convert inch to feet

function inchTofeet(inch){
    var feet = inch/12;
    return feet;
}

var convertedFt = Math.round(inchTofeet(80));
console.log(convertedFt +" Ft");