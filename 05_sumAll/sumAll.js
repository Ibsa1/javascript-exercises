const sumAll = function(a,b) {
    let summation = 0;
    let c=0;
    if(a<0 || b<0 || !Number.isInteger(a) || !Number.isInteger(b) || typeof a !=='number' || typeof b !=='number') return "ERROR";
    if (a>b) {
        c = a; a = b; b = c;
    }
    for(let i=a; i<=b; i++){
        summation+=i;
    }
    return summation;
};

// Do not edit below this line
module.exports = sumAll;
