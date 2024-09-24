const removeFromArray = function(inputArray, ...rest) {
    let newArray = [];
    for(let i=0; i<inputArray.length; i++){
        if (!rest.includes(inputArray[i])) {
            newArray.push(inputArray[i]);
        }
    }
    return newArray;
};


// Do not edit below this line
module.exports = removeFromArray;
