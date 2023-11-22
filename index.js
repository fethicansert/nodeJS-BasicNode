//Require() Function used to include external modules in to cuurent js file

const { log } = require('console'); 
const os = require('os');
const path = require('path');



console.log(os.type());
console.log(os.version());
console.log(os.homedir());


console.log(__dirname);
console.log(__filename);


console.log(path.dirname(__filename));  //It's return dirname of given fileName => Path of FileName
console.log(path.basename(__filename)); //It's return basename of given filename => Path of FileName
console.log(path.extname(__filename));  //It's return extension name of given filename => Path of FileName


const parsedFile = path.parse(__filename); //Parse to file name as object, object properties are  root ,dir ,base, ext, name 
console.log(parsedFile);

for( item in parsedFile){
    console.log(item);
}


const math = require('./math'); //With require I can get all of the Math file and modules but I have to use math. before I used modules - functions
console.log(math.add(2, 2));
console.log(math.sub(4, 2));
console.log(math.mul(3, 2));
console.log(math.div(8, 4));


const { add, sub, mul, div } = require('./math') //IF I can  specify to modules in object I don't need to use math. just directy use the module function
console.log(add(2,2));
console.log(add(2, 2));
console.log(sub(4, 2));
console.log(mul(3, 2));
console.log(div(8, 4));