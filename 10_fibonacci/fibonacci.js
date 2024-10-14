const fibonacci = function(num) {
    if(num==0) return 0;
    if(num<0) return "OOPS";
    if(num==1 || num==2) return 1;

    let counter = 2;
    let fab1 = 1;
    let fab2 = 1;
    let sum = 0;

    while(counter<num){
        sum = fab1+fab2;
        fab1=fab2;
        fab2=sum;
        sum=0;
        counter++;
    }
    return fab2;
};

// Do not edit below this line
module.exports = fibonacci;
