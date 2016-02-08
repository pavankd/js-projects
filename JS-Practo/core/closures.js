/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */

function init(){
   var name = 'mozilla'; // name is a local variable created by init
  function displayName(){// displayName() is the inner function, a closure
    alert(name);// use variable declared in the parent function
  }
  displayName();
}
init();
