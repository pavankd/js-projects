/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */
/*
*Counter example using closures and anonymous function
*/

var counter = (function(){
  var privateCounter=0;
  function changeBy(val){
    privateCounter += val;
  }
  return {
    increment : function(){
      changeBy(1);
    },
    decrement : function(){
      changeBy(-1);
    },
    value : function(){
      return privateCounter;
    }
    
  };
})();


console.log(counter.value());
counter.increment();
counter.increment();
console.log(counter.value());
counter.decrement();
console.log(counter.value());
