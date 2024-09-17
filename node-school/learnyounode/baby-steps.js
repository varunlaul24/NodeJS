// Write a program that accepts one or more numbers as command-line arguments and prints the sum of those numbers to the console (stdout). 

/*
    You can access command-line arguments via the global process 
    object. The process object has an argv property which is an 
    array containing the complete command-line. i.e. process.argv. 

    The first element of the process.argv array is always 'node', 
    and the second element is always the path to your .js file.
    Be aware that all elements of process.argv are strings.
*/

let sum = 0;
for(let i=2; i<process.argv.length; i++){
    sum += Number(process.argv[i]);
}
console.log(sum);