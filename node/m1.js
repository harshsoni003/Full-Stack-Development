
const sum= (a,b) => a+b;
const mul= (a,b) => a*b;

let obj={
    sum:sum,
    mul:mul,

};
module.exports=obj;

//or 2 way

module.exports={

    sum:sum,
    mul:mul,
    };

//or 3 way

module.exports.sum = (a,b) => a+b;