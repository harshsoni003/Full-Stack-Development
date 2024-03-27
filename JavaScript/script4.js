let stu1_marks=18;             // way: 1
let stu2_marks=18;

let mark ={
    stu3:20,                     // way: 2 using key value pair
    stu4:15
}


let marks=[12,3,18,19,17,20];              // way 3 using array
console.log(marks);
console.log(marks.length);          //its a property(give only value)  not method(do some function/work)
                                     //typeof marks: object





console.log(marks[2]);    //18
console.log(marks[0]);    //12
console.log(marks[6]);                //undefined




marks[5]=100;               //change the value 20 to 100      marks=[12,3,18,19,17,100]; 
console.log(marks);



let heroes=["harsh","soni","pratik","kadam","tanmay" ];          //Looping over an Array   index=0,1,2,3,4  
for(let index=0; index < heroes.length; index++){                  // length=5  i.e index < heroes.length
    console.log(heroes[index]);                                    //4<5
}

//for of
for (let hero of heroes){
    console.log(hero);
}




//pratices
let marks = [85, 97,44,37,76,60];
let sum=0;
for(let val of marks){
    sum=sum+val;             //sum+=val;
      
}
let avg = sum/marks.length;
console.log(avg);



//pratices
let item = [250,645,300,900,50];
 for(let i=0; i<item.length; i++ ){           //also use for of loop
     let offer = item[i]/10;
     item[i]= item[i]-offer;
 }

 console.log(item);