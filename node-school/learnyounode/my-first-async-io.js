/*
    Write a program that uses a single asynchronous filesystem operation to 
    read a file and print the number of new lines it contains to the console 
    (stdout), similar to running cat file | wc -l.
*/

/*
    Use fs.readFile(). Instead of using the return value of this method we need 
    to collect the  value from a callback function that we pass in as the second 
    argument. Idiomatic Node.js callbacks normally have the signature:  
            function callback (err, data) { / ... / }
*/

require('fs').readFile(process.argv[2], (err, data) => {
    if(err) {
        console.log(err);
        return;
    }
    console.log(data.toString().split('\n').length-1)
});

/* 
    As with readFile(), you can supply 'utf8' as the second argument and put the 
    callback as the third argument and we will get a String instead of a Buffer.
*/ 