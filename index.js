// First Class Function

function receivesAFunction(callback) {
    callback();
  }
  
  function returnsANamedFunction() {
    return function functionReturned() {};
  }
  
  function returnsAnAnonymousFunction() {
    return function () {};
  }
  