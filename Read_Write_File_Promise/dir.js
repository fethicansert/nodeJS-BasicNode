const fs = require('fs');
const path = require('path');
const newDir = path.join(__dirname,'newDir');

//create dir if it not exists
if (!fs.existsSync(newDir)) {
    fs.mkdir(newDir, (err) => {
        if(err) throw err;
        console.log(`${path.basename(newDir)} is created`);
    });
} else {
    console.log("This Directort Already Exists");
}

//Delete dir if it exists
if (fs.existsSync(newDir)) {
    fs.rmdir(newDir, (err) => {
        console.log(`${path.basename(newDir)} is Deleted`);
    });
} else {
    console.log('This Dirextort not Exists');
}