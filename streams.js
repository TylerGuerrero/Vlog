const fs = require('fs');
const readStream = fs.createReadStream('./docs/blog3.txt');
const writeStream = fs.createWriteStream('./docs/blog4.txt');

// readStream.on('data', (chunck) => {
//     console.log('----- NEW CHUNK ------')
//     console.log(chunck.toString());
//     writeStream.write('\n NEW CHUNK\n');
//     writeStream.write(chunck.toString());
// })

// Piping
// will take each chunk from the readStream 
// and write it to writestrea,
readStream.pipe(writeStream)