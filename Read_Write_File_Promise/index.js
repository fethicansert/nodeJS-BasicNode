const fsPromises = require('fs').promises;


const { log } = require('console');
const path = require('path');
const shortText = path.join(__dirname,'textFiles','shortText.text');
const shortWriteText = path.join(__dirname,'textFiles','shortWriteText.text')
const renameText = path.join(__dirname,'textFiles','renameText.text')
// const renamEdText = path.join(__dirname,'textFiles','renamEdText.text')


const fileOps = async () => {

    try{
        const data = await fsPromises.readFile(shortText, 'ascii');
        console.log(data);
        console.log('ReadFile Succsess')

        await fsPromises.writeFile(shortWriteText,['Hello',' Coder ','How are you ?']);
        console.log('WriteFile Succsess');

        await fsPromises.appendFile(shortText,'\nNice to meet you THE CODER');
        console.log("AppendFile Succsess");

        // await fsPromises.rename(renameText,renamEdText);
        // console.log('renameFile Success');

        const newData = await fsPromises.readFile(shortWriteText,'utf-8');
        console.log(newData);
    } catch(err) { 
        console.error(err)
    }
};

fileOps();

// fsPromises.readFile(shortText, 'ascii', (err, data) =>{
//     if(err) throw err;
//     console.log(data);
// });


