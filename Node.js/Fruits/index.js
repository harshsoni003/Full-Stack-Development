const apple = require("./apple");          //must be index.js file
const banana = require("./banana");        // require, combined and export
const orange = require("./orange");

let fruits = [apple, banana, orange];  //store all value(apple,banana,orange) in fruits variable

module.exports = fruits;