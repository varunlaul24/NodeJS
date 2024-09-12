/*
const a = 4 // a is a global variable, it can be accessed by the functions below  
  
function foo () {  
  const b = a * 3 // b cannot be accessed outside foo function, but can be accessed by functions  
  // defined inside foo  
  function bar (c) {  
    const b = 2 // another `b` variable is created inside bar function scope  
    // the changes to this new `b` variable don't affect the old `b` variable  
    console.log(a, b, c)  
  }  
  
  bar(b * 4)  
}  
  
foo() // 4, 2, 48 
*/

const a = 1;
const b = 2;
const c = 3;

(function firstFunction() {
  const b = 5;
  const c = 6;

  (function secondFunction() {
    const b = 8;

    (function thirdFunction() {
      const a = 7;
      const c = 9;

      (function fourthFunction() {
        const a = 1;
        const c = 8;
          
      })();
    })();
    console.log(`a: ${a}, b: ${b}, c: ${c}`);
  })();
})();