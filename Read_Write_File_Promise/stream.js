const fs = require('fs');


const path = require('path');
const textFiles = 'textFiles';
const streamFile = path.join(__dirname, textFiles, 'loremText.text');
const WriteableStreamFile = path.join(__dirname, textFiles, 'new-loremText.text');



//With creaateReads Steam I can specify start and end value to read 
//End default infinity
const rs = fs.createReadStream(streamFile, {encoding: 'utf-8'}); 
// const rs = fs.createReadStream(streamFile, {encoding: 'utf-8', start: 0, end: 20}); 

//Withcreatewrite I can specify where to start write
const ws = fs.createWriteStream(WriteableStreamFile);

// rs.on('data',(dataChunk) => {
//     ws.write(dataChunk);
//     console.log(dataChunk);
// });

rs.pipe(ws);