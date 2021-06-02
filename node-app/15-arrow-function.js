//raditional Function
const sum = function (a) {
  return a + a;
};

// Arrow Function Break Down

// 1. Remove the word "function" and place arrow between the argument and opening body bracket
const sum = (a) => {
  return a + a;
};

// 2. Remove the body brackets and word "return" -- the return is implied.
const sum = (a) => a + a;

// 3. Remove the argument parentheses
const sum = a => a + a;

console.log(sum(2));

/*
Arrow functions offer up an alternative syntax from the standard ES5 function.
ShrtHand functin is useful when you have a function that immediately returns a value. 
*/
