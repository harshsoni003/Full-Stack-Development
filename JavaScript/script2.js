//print
for(let i=1; i<=20; i++){
    console.log("HARSH SONI");
}
console.log("loop has ended");



//calculate sum 1 to 5
let sum=0;
for (let i=1; i<=5; i++){
    sum = sum+i;             //sum=0+1=1  (i=1)
                            // sum=1+2=3 (i=2)

}
console.log("sum = ", sum);



//print
for(let i=1; i<=20; i++){
    console.log("i", i);
}
console.log(i); //this i isn't print because i decleared in only block({})


//while loop
let j=1;
while(j<4){
    j++;
    console.log("j", j);

}


//do-while loop
let i=1;
do{
    console.log("hello",i)
    i++;
}
while(i<=5);
console.log("loop ended")



//for of loop
let str = "HARSH SONI";
let size=0;
for (let i of str){
   console.log("i=", i);
   size++;
   console.log("Size of string is: "+size);  
}
console.log("Size of string is: "+size);            //Size of string is: 10

//or

let heroes=["harsh","soni","pratik","kadam","tanmay" ]; 
for (let hero of heroes){
    console.log(hero);
}




//for in loop
let student = {
    name :"Harsh Soni",
    age :35,
    city :"Delhi",
    ispass: true,
};
for (let key in student){
    console.log("key = ", key, "\nvalues", student[key]);  //console.log(person["age"]);
}
//console.log(person["age"]);




//PRACTICES
let gameNum=20;

let userNum = prompt("Guess the no: ");
while(userNum != gameNum){
    userNum = prompt("you entered wrong no. try again");

}
console.log("Congratulation , guess Correct no ");


