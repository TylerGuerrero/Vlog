const fs = require('fs');

// These functions are aysnc 
// meaning they run on their own they dont run in order
// they run at what ever get done first

// reading files
// fs.readFile('./docs/blog1.txt', (err, data) => {
//     if (err) throw err;
//     console.log(data.toString());
// });

// writing files
// fs.writeFile('./docs/blog1.txt', 'Hello World', () => {
//     console.log('File was written to')
// })

// directoris
// if (!fs.existsSync('./assests')) {
//     fs.mkdir('./assests', (err) => {
//         if (err) throw err;
//         console.log('Directory was created');
//     })
// } else {
//     fs.rmdir('./assests', (err) => {
//         if (err) throw err;
//         console.log('folder deleted');
//     })
// }

// delete files
if (fs.existsSync('./docs/delete.txt')) {
    fs.unlink('./docs/delete.txt', (err) => {
        if (err) throw err;
        console.log('File Deleted');
    })
} else {
    console.log('File does not exist');
}