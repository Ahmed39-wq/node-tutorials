//Streams are used for handling continuous large amounts of data
//Buffers are temporary storage areas in memory used to hold binary data


const fs = require('fs');

//read data from a file
const readStream = fs.createReadStream('./content/third.txt', { encoding : 'utf8' });

//write data to a file
const writeStream = fs.createWriteStream('./content/fourth.txt')

// readStream.on('data', (chunk) => {
//     console.log('------- New chunk --------');
//     console.log(chunk);
//     writeStream.write('\nNew Chunk\n')
//     writeStream.write(chunk);
// })


//pipe, passing data from a readable stream to a writable stream automatically
readStream.pipe(writeStream);