let arr =[1,2,3,4,5,6];                   //For each only used for array                                        
arr.forEach(function myfunc(val) {        //mainly used in arrow function form
    console.log(val);
})



let arr=["q", "w", "ww"];
arr.forEach((val)=>{

    console.log(val);
});



let arr=["q", "w", "ww"];       //1st parameter= value/item print,  2nd = index/position print,  3rd= print original array
arr.forEach((val, idx,arrr)=>{

    console.log(val,idx,arrr);
});



//map
let nums = [167, 52, 391];
let newArr = nums.map((val) => {
    return val *2; 
}
);
console.log(newArr);



//see pdf


//Reduce
let arr = [1, 2, 3, 4];
const output = arr.reduce((res, curr) => {
      return res + curr;
});
console.log(output);


//practice