

var value = 500; //Global variable
var obj = {
  value: 0,
  increment: function () {
    this.value++;

    var innerFunction = function () {
      console.log(this.value);
    };

    innerFunction(); //Function invocation pattern
  },
};
obj.increment(); //Method invocation pattern
