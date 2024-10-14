const palindromes = function (myString) {
    let myArray = myString.toLowerCase().replace(/[^a-z0-9]/g, '').split('');

    for (let i=0, j=myArray.length-1; i<j; i++, j--){
        if(myArray[i]!==myArray[j]){
            return false;
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
