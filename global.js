//Global Object


setTimeout(() => {
    console.log('in the timeout state');
    clearInterval(int)
},3000)

const int = setInterval(() => {
    console.log('in the interval state');
},1000)


console.log(__dirname) //absolute path of the directory
console.log(__filename) //absolute path of the file
// console.log(global);