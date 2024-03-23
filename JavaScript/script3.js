//STRINGS

let str1="harsh";
let str2="soni";

 console.log(str1.length);
 console.log(str2.length);
 
console.log(str1[0]);//gives first character of string


let str="Harsh Soni";
newStr = str.toUpperCase();    //OR str = str.toUpperCase();
console.log("Original String : ",str);
console.log("Converted to Uppercase: ",newStr) ;


let str3="0123456789";
console.log(str3.slice(1, 3));   //o/p= 12


let str4="helloh";
console.log(str4.replace("h", "m"));  // 1 time replace
console.log(str4.replaceAll("h", "m"));  // multiple time

console.log(str4.charAt(1)); //o/p=e

//practice
let fullname= prompt("write full name without spacing");
let username = "@"+ fullname + fullname.length;
console.log(username);




