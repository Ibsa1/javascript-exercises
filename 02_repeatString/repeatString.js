const repeatString = function(text, num) {
    let resultText="";
    if(num<0){
        return 'ERROR';
    }
    for(let i=0; i<num; i++){
        resultText+=text;
    }
    return resultText;
};

// Do not edit below this line
module.exports = repeatString;
