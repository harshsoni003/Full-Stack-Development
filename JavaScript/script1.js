//Arithmetic OPeration
let a=5;
let b=2;

console.log("a+b=" ,a + b);
console.log("a-b=" ,a - b);
console.log("a%b=" ,a % b);
console.log("a**b=" ,a ** b); //5^2

//uniary operator
a = a+1; //6
a ++;   
console.log("a=" ,a);

a = a-1; //4
a --;   
console.log("a=" ,a);



// Conditional statements
let age=2;
if(age >=18){
    console.log("you can vote")
}
if(age <18){
    console.log("you can't vote")
}


// //practice
let number = prompt("Enter a number");
if(number%5==0){
    console.log(number ,"is multiple of 5")
}
else{
    console.log("NOT multiple of 5")
}


//practice
let number1 = prompt("Enter a b/w 0-100 number");
let grade ;
if(number1>=80 && number1<=100){
   grade="A";
}
else if(number1>=70 && number1<=89){
   grade="B";

}else if(number1>=60 && number1<=69){

    grade="C";
}else if(number1>=50 && number1<=59){
    grade="D";
}
else{
     grade="F";
}
console.log("Your Grade is  ",grade);



//practice
let age1 = prompt("Enter age");

if (age1 > 18) {
    console.log("You are eligible to vote");
} else if (age1 === 18) {
    console.log("18 is eligible for vote");
} else {
    console.log("You are not eligible to vote");
}
