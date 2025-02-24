//simple callback function

// const sayHello = (callback) => {
//     console.log("Hello!");
//     callback();
// }

// const greetUser = () => {
//     console.log("world");

// }

// sayHello( greetUser);

//callback with arguments
// const greetUser = (name, callback) => {
//   callback(name);
// };

// const displayMessage = (name) => {
//   console.log(`Welcome,${name} !`);
// };

// greetUser("Henri", displayMessage);

// //callback with a delay

// const delayedMessage = (message, callback) => {
//   console.log("Processing...");
//   setTimeout(() => callback(message), 200);
// };

// const showMessage = (message) => {
//   console.log(`Message ${message}`);
// };

// delayedMessage("Hello, after 2 seconds!", showMessage);

// //using callbacks with map()

// const doubleNumbers = (arr, callback) => {
//   return arr.map(callback);
// };

// const double = (num) => num + 2;

// console.log(doubleNumbers([1, 2, 3], double));
