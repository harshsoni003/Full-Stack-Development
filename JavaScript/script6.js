// Function: A standalone(piece of code) block of code that performs a task.
// Method: A function associated with an object that can operate on the data contained within that object.
//add as a standalone function is just a function.
//calculator.add is a method because it is a function associated with the calculator object.

function myfunction() {
    console.log("hello how are harsh");
    console.log("Harsh soni");

}
myfunction();



//Arrow
const printhello=()=>{                   
    console.log("print hello");
};
printhello();





function myfunction( msg ){             //parameter
console.log("before console");
    console.log(msg); 
    console.log("after console");
}
myfunction("I love java script");       //argument






function add(x,y){
    console.log(x+y);
}
add(2,3);


//Arrow

const arrowadd = (a,b) => {
    console.log(a+b);
};
arrowadd(5,5);







//return
function add(a,b){

    console.log("before return");
    return a+b;
    //console.log("after return");    // negelect
}
sum=add(2,3);
console.log(sum);





// Arrow function 

const arrowmul = (a,b) =>{
    return a*b;
};
Mul =arrowmul(3,3);
console.log(Mul);






// practice


function countvowel(str){

    let count=0;
    for(const char of str ){
        if (char=='a' || char=='e' || char=='i' || char=='o' || char=='u')  {
            count++;
        }
    }
console.log(count);
}
 countvowel("harshsoni");





// Arrow function  
const countvowel = (str) =>{                      //countvowel = function name
    let count=0;
 for(const char of str ){
        if (char=='a' || char=='e' || char=='i' || char=='o' || char=='u')  {
            count++;
        }
}
console.log(count);
}
  countvowel("harshsoni");
