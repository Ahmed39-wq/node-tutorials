const { log } = require("console");
const fs = require("fs"); // built in fs module

//reading files, takes 2 arguments, first arg is the file path,
//and the second arg is the callback function
// fs.readFile("./content/first.txt", (err, data) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log(data.toString());
// });

//writing files, takes 3 arguments, first arg is the file path, second arg is the text,
// third arg is the callback function
// fs.writeFile("./content/first.txt", "It is gonna be amazing", () => {
//   console.log("File written");
// });

//if file doesn't exist, it creates a new file and writes the text in there
// fs.writeFile("./content/second.txt", "It is gonna be amazing", () => {
//   console.log("File written");
// });

//directory
if (!fs.existsSync('./assets')) { //checks if the file does not exists
    fs.mkdir("./assets", (err) => {
      if (err) {
        console.log(err);
      }
      console.log('folder created');
    });
} else {
    fs.rmdir("./assets", (err) => {
        if (err) {
            console.log(err);
        }
        console.log('folder deleted');
    })
}


//deleting files
if (fs.existsSync('./content/delete.txt')) {
    fs.unlink('./content/delete.txt', (err) => {
        if (err) {
            console.log(err);
        }
        console.log('file deleted');
    });
}
