const { log } = require("console");

const buffer = new Buffer.from('CODER BRAH','utf-8') //utf-8 default encoding //alcocate 10 bit it's fixed 


console.log(buffer); // <Buffer 43 4f 44 45 52 20 42 52 41 48> It's hex representation of binary 

console.log(buffer.toJSON());  // Data in the object is decimal representaion og hex in buffer with out convertion of JSON(JavaScriprt Oject Notation)

// {
//     type: 'Buffer',
//     data: [
//       67, 79, 68, 69, 82,
//       32, 66, 82, 65, 72
//     ]
//   }


console.log(buffer.toString()); //CODER BRAH


const bufferWrite = new Buffer.from("CODER ZYZZ",'utf-8'); // write will rewrite CODER ZYZZ => Hello ZYZZ beaucse buffer has limited size
bufferWrite.write('Hello');
console.log(bufferWrite.toString());



const buff = Buffer.alloc(8); //alloc alocation of size => how many bite I give this container
console.log(buff);

buff.write('123345678','utf-8');
console.log(buff);

console.log(buff.toJSON());

buff.write('123345678777','utf-8'); //if I write more than size ignore the extra bites


console.log(buff.length);

console.log(buff[0]);


const buff2 = Buffer.from('string', 'utf-8'); //takes this 'string' and decode method and create buffer FROM this values; I don't need to specify size length;

console.log(buff2);
console.log(buff2.toJSON());






const buff3 = Buffer.from([115],'hex'); //if I use decimal Buffer will transform data to hex
const buff4 = Buffer.from('73', 'hex'); //Use hex unicode to directy write hex value to buffer
const buff5 = Buffer.from([0x73]); // Use '0x' to write hex in decimal array fornat

console.log(buff3);
console.log(buff4);
console.log(buff5);


const buff6 = Buffer.from( [ 115, 116, 114, 105, 110, 103 ] );
console.log(buff6.toString('utf-8'));

console.log(buff6.toString('utf-16le')); // if I trt to unicode with utf-16le I will get 瑳楲杮 thats why specifiy unicode 


const buff7 = Buffer.from('string','utf-16le');
console.log(buff7);
console.log(buff7.toJSON());
console.log(buff7.toString());

const buff8 = Buffer.from([
    115,   0, 116,   0, 114,
      0, 105,   0, 110,   0,
    103,   0
  ]);
console.log(buff8.toString('utf-16le'));


const buff9 = Buffer.from('e589B0', 'hex'); //lower case and uppercase writeable no case sensentive

console.log(buff9);


console.log(buff9.toString("utf-8"));
