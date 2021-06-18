//Object Property ,Shorthand and Destructuring


// const name = "Hemlata";
// const userAge = 26

// const user = {
//     name:name,
//     age : userAge,
//     location : "Hoshangabad"
// }

//console.log(user); // { name: 'Hemlata', age: 26, location: 'Hoshangabad' }

// const user = {
//     name,
//     age : userAge,
//     location : "Hoshangabad"
// }

// console.log(user); // { name: 'Hemlata', age: 26, location: 'Hoshangabad' }

//OBJECT DESTRUCTURING :

const product = {
  label: "orange juice",
  price: 90,
  quantity: 3,
  rating : 4.5,
};

// const label = product.label; //orange juice
// const price = product.price; //90

//const { label, price, quantity } = product;

// console.log(label); //orange juice
// console.log(price); //90
// console.log(quantity); //3

// const {label : productLabel,price,quantity,rating = 5} = product;
// //console.log(label); //error :  label is not defined
// console.log(productLabel);
// console.log(price); 
// console.log(quantity); 
// console.log(rating);


const {label : productLabel,price,quantity,rating = 5} = product;
//console.log(label); //error :  label is not defined
console.log(productLabel);
console.log(price); 
console.log(quantity); 
console.log(rating); // 4.6


