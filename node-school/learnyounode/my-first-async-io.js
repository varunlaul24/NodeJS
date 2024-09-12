// Write a program that uses a single asynchronous filesystem operation to read a file and print the number of new lines it contains to the console (stdout), similar to running cat file | wc -l.
require('fs').readFile(process.argv[2], (err, data) => {
    if(err) {
        console.log(err);
        return;
    }
    console.log(data.toString().split('\n').length-1)
});