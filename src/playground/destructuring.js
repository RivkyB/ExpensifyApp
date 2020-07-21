//Object destructuring

// console.log("hello");
// const person = {
//   name: "rivky",
//   age: 21,
//   location: {
//     city: "lakewood",
//     temp: 85,
//   },
// };

// const { name: firstName = "anonymous", age } = person;
// const { city, temp: temperature } = person.location;
// console.log(`${firstName} is ${age}.`);
// console.log(`${city} and ${temperature}`);

// const book = {
//   title: "ego is the enemy",
//   author: "ryan holiday",
//   publisher: {
//     name: "penguin",
//   },
// };
// const { name: publisherName = "self published" } = book.publisher;
// console.log(publisherName);

//Array Destructuring

// const address = ["149 N Oakland St", "Lakewood", "NJ", "08701"];

// const [street, city, state, zip] = address;

// console.log(`you are in ${street} ${state}.`);

const item = ["coffee", "2.00", "2.50", "2.75"];
const [drink, , medium] = item;
console.log(`a medium ${drink} costs ${medium}`);
