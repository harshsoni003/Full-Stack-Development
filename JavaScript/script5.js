//PUSH
let foodItems= ["apple", "tomato", "banana", "mango"];
foodItems.push("paneer" ,"chicken");
console.log(foodItems); //ADD at last


//POP
foodItems.pop();  // dlt at last food items chicken
console.log(foodItems);


let deleteditem= foodItems.pop(); //also use to return deleted  item
console.log(foodItems);
console.log("dlt item ", deleteditem);


//convert array into string
let foodItems1= ["apple", "tomato", "banana", "mango"];
console.log(foodItems1);
console.log(foodItems1.toString());
  

//Concate(add)
let foodItems2= ["apple", "tomato", "banana"];
let clothItem= ["jeans", "shirt"];
let newItem= foodItems2.concat(clothItem);
console.log(newItem);
  

//unshift - add first element
let foodItems21= ["apple", "tomato", "banana"];
foodItems21.unshift("paneer" ,"chicken");

//shift - dlt first element
let foodItems22= ["apple", "tomato", "banana"];
let deletedfirstitem= foodItems22.shift(); 

console.log("dlt item ", deleteditem);


//Slice( ) : returns a piece of the array
let foodItems23= ["apple", "tomato", "banana", "mango","cherry","grapes"];

console.log(foodItems23.slice(1,3)); // last index item not take   //['tomato', 'banana'] = print


//Splice( )  add and dlt and replace throught index

let arr= [1, 2, 3, 4, 5, 6, 7];
arr.splice(2,1,'cat');
console.log(arr);                        //2 = index 2= which is 3
                                         // 1 = IN index 2 how many item  will dlt
                                         // cat = dlt item relpace by cat
 //add (add 1 or more than )
 arr.splice(2,0,"hrs", 101);         //add in indeex 2  from = [1, 2, 'cat', 4, 5, 6, 7]
 console.log(arr);                   //[1, 2, 'hrs', 101,cat', 4, 5, 6, 7]


 //dlt (dlt 1 or more than )
 
 arr.splice(2,1);         
 console.log(arr);

 //replace
 arr.splice(3,1,900);         
 console.log(arr);


