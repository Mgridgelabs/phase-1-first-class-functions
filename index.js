function receivesAFunction(callback) {
    callback(); 
  }

  function NamedFunction() {
    return "This is a named function!";
  }


  function returnsANamedFunction(){
        return NamedFunction;
  };

  function returnsAnAnonymousFunction(){
    return function() {
        return "This is an anonymous function!";
      };
  }