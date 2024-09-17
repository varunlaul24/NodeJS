/* 
    Write a program that uses a single synchronous filesystem operation to read a file 
    and print the number of newlines (\n) it contains to the console (stdout), similar 
    to running cat file | wc -l. The full path to the file to read will be provided as 
    the first command-line argument (i.e., process.argv[2]). You do not need to make 
    your own test file. 
/*
    Import fs module from the Node core library to perform a filesystem operation. All 
    synchronous (or blocking) filesystem methods in the fs module end with 'Sync'. To 
    read a file, use fs.readFileSync('/path/to/file'). This method will return a Buffer 
    object containing the complete contents of the file. Buffer objects are Node's way 
    of efficiently representing arbitrary arrays of data, whether it be ascii, binary or 
    some other format. Buffer objects can be converted to strings by simply calling the 
    toString() method on them.
*/

console.log(require('fs').readFileSync(process.argv[2]).toString().split('\n').length-1);
console.log(require('fs').readFileSync(process.argv[2]).toString());