
// const { readFile } = require('fs');


// const text = readFile('Read_Write_Files/shortText.text', (err, data) => {
//     console.log(data.toString());
// });


const fs = require('fs'); //FileStstem
const path = require('path');

const fileReadPath = path.join(__dirname,   'textFiles', 'shortText.text');
const fileWritePath = path.join(__dirname,  'textFiles', 'shortTextReply.text');
const fileAppendPath = path.join(__dirname, 'textFiles', 'shortTextReply.text');
const fileRenamePath = path.join(__dirname, 'textFiles', 'renanedShortText');

fs.readFile(fileReadPath,'utf8' ,(err,data) => {
    if(err) throw err; // => err is objext => { errno - cide - syscall - path }
    console.log(data);
});



// console.log("I will exute ahaha :)"); 

//Fonksyionlari birbirinin icine koymamiz bir nevi synchronus sagliyor call backlerinde execute ettigimiz icin
//But is couse CALL BACK HELLLLLLLLLLL :(

fs.writeFile(fileWritePath, "Hell Fethi How are you ?", err => {
    if (err) throw err;
    console.log("Write Complete");

    //If there is no file to append than create file
    fs.appendFile(fileAppendPath, '\nI will update the file ez', err => {
        if(err) throw err;
        console.log("Append file Complete");

        fs.rename(fileAppendPath, fileRenamePath, (err) => {
            if(err) throw err;
            console.log("Rename Completed");
        });
    });
});





//If uncaughtError occurs than log.error and exit to process
process.on('uncaughtException', err => {
    console.error(`There was an uncaught error: ${err}`);
    process.exit(1)
});

// setTimeout(()=>{
//     console.log("EHllo");
// })

