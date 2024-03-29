const info = require("./Fruits");  // used to link or require folder (Fruits)
console.log(info);               // save/show as array  
// output: [
//     { name: 'apple', color: 'red' },
//     { name: 'banana', color: 'yellow' },
//     { name: 'orange', color: 'orange color' }
//        ]
  
console.log(info[0]);   
//o/p  { name: 'apple', color: 'red' }

console.log(info[0].name); 