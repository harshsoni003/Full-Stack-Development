//DOM
// window---> document---->all = see the html tags
//or window.document
// console.dir(window.document) = it's used to print method and properties
//console.log= used to only print


console.dir(window.document); //or
console.dir(document);

//acess the html element
console.dir(document.body);  //property acess
console.log(document.body);  // print element

document.body.childNodes [3].innerText = "harsh soni";  //aise dyanmic changes kr skte hai
// h1 text change it with harsh soni 





let heading = document.getElementById ("heading-id"); //acess the html element through id name
console.dir(heading);
console.log(heading);


let headings = document.getElementsByClassName("heading-class");  //acess the html element through class name
console.dir(headings);

//acess the html element through p ---> see pdf
let parahs = document.etElementsByTagName("p");
console.dir(parahs);


let firstEl = document. querySelector("p"); //1st element return
let firstEle = document. querySelector(".heading-class");
console.dir(firstEl);
console.dir(firstEle);

let allEl = document. querySelectorAll("p"); //all elements/node list 
console.dir(allEl);



