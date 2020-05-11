const fs = require('fs');

const writeFile = fileContent => {
    return new Promise((resolve, reject) =>{
        fs.writeFile('./READMETEST.MD', fileContent, err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: 'Readme Created!'
            })
        })
    })
}

module.exports = writeFile;