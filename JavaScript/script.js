//print the value
console.log("harsh soni");            
console.log("hello how are you");


// variable type
fullName="harsh soni"; //camelcase
console.log(fullName);

age2_$=21;
console.log(age2_$);

_x=null;    //we know the value inside the x which is null
$y=undefined;  // we don't know what value inside the y
console.log(_x, $y);

isfollow=true;          //boolean types true/false
console.log(isfollow);



//Dynamically typed = doesn't required to decleared(int,string,char,boolean,float) what value we want to store


var age = 23;  // can be decleared and updated
age = 45;
var age= 33;
var age= 86;
console.log(age);


let myAge=19; //can't re-decleared i.e,let myAge=21;
myAge=21;   //but can be updated
myAge= 36;
console.log(myAge);


{                // but in block ({}) we can recleared
let a= 10;
console.log(myAge);
}
{
let a=20;
console.log(myAge);
}




const PI=3.14;   // can't be decleared and updated
const e= 2.007137;
console.log(PI,e);


// datatype in js
let age1=29;         //typeof age1
let fullName="hrs";     //typeof fullName
let folower=true;       //typeof folower
let y;                  //typeof y
let x=null;              //typeof x
let a = BigInt("123");
let b = Symbol("Hello!")


//object(non- primitive)
const student = {             //student is object
    fullName: "ph developer",  //key:value pair
    age:45,
    cgpa: 8.2,
    isPass: true,
};
console.log(student) ;

console.log(student["age"]);   // only age access
console.log(student.age);

console.log(student["key"]);
console.log(student.key);

  student["fullName"]= "Harsh Soni";  //change the values
  student.fullName= "soni";
  student.age= 444;
  
  console.log(student["fullName"]);


  //pratices set
  const product={
    title: "Ball pen",
    rating :4,
    offer: 5,
    price: 270

}
console.log(product);


const profile={
    userName:"@Sharadha",
    isFollow: false,
    followers: 569,
    follwing: 4,
    posts:195
}
console.log(profile);
console.log(typeof profile["userName"]);





