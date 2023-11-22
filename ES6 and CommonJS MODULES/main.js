//I can user require in conditonal statements
//With writing specific module function in object {} 
//We can specific function not all the module

//Importing ES6 Module => Import always hosted to top level whatever you write the import
//Importing while checking in PARSETIME requre is a function it's checked in RUNTIME
import {getFullName, getSurname_} from './es6foo.js'; 

const foo = require('./foo.js');

console.log(foo.getFullName('FirstName','LastName'));
console.log(foo.getSurname('Jack','Monster'));


const { getFullName, getSurname } = require('./foo.js');



console.log(getFullName('Fethi Can','Sert'));
console.log(getSurname('Jack', 'Monster'));

//Require can used in conditioal statements
if(1 == true){
    // import getFullName from './es6foo'; => Can't used in contional statemnts only can used top level of modlue

    const foo = require('./foo.js');

    console.log(foo.getFullName('FirstName','LastName'));
    console.log(foo.getSurname('Jack','Monster'));


    const { getFullName, getSurname } = require('./foo.js');



    console.log(getFullName('Fethi Can','Sert'));
    console.log(getSurname('Jack', 'Monster'));

}


getFullName('es6', 'import')


