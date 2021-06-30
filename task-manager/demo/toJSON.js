// const pet = {
//   name: "kittu",
// };
// console.log(pet); // { name: 'kittu' }

// const pet = {
//   name: "kittu",
// };

// console.log(JSON.stringify(pet)); // {"name":"kittu"}

const pet = {
  name: "kittu",
};

pet.toJSON = function () {
  return {};
};

console.log(JSON.stringify(pet));
