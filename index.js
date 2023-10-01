// First Class Function

// Callback func as argument and calling the callback func
function receivesAFunction(callback) {
    callback();
  }
  

//  Func takes no argument and returns named function 
function returnsANamedFunction() {
    return function functionReturned() {};
  }

// Func takes no argument and returns anonymous func
function returnsAnAnonymousFunction() {
    return function () {};
  }
  