let div1 = document.querySelector("div");
console.log(div1);

let id111 = div1.getAttribute("id");   
console.log(id111);    // print the atttributes value or id value = box


console.log(div1.setAttribute("id" , "bigbox")); // see in console -leftside -element

let div = document.querySelector ("div");
div.style.backgroundColor = "green";   //changes in style
div. style.backgroundColor = "purple";

console.log(div.style); //acess css in js
div.style.foñtSize = "26px";








//add button

let newBtn = document. createElement ("button");  //create button
newBtn. innerText = "click me!";                 // write text 'click me'
console. log (newBtn) ;                     
div = document. querySelector ("div");            //add button inside the div so access the div
div. append (newBtn) ;                            //finalyy added button

//add heading
let newHeading = document. createElement ("h1");
newHeading. innerHTML = "<i>Hi, I am new!</i»";
document. querySelector ("body").prepend(newHeading) ;



//remove paragraph
let para = document.querySelector ("p"); //acess the paragraph
para. remove();                          // remove

