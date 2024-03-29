const sum = (a,b) => a+b;
const mul = (a,b) => a*b;
const g=9.8;
const PI = 3.14;

module.exports = 1234567890;  // used to link 2 file here(math.js and script1.js)

let obj={
sum:sum,
mul:mul,
g:g,
PI:PI,
};

module.exports = obj;                 //output = sum: [Function: sum], mul: [Function: mul], g: 9.8, PI: 3.14 }
                                                //{ sum: [Function: sum], mul: [Function: mul], g: 9.8, PI: 3.14 }


//2nd way
    
module.exports={
    sum:sum,
    mul:mul,
    g:g,
    PI:PI,
    };


// 3rd way(direct)

module.exports.sum = (a,b) => a+b;
//or
exports.mul = (a,b) => a*b;  //not valid =exports =5;

