// let person = {
//   name: "Henri",
//   age: 20,
//   city: "Eldoret",
// };
// console.log(person.name); // Access the name property
// console.log((person.age = 22)); //Change the age property
// console.log((person.country = "Kenya")); //add a new property
// person.greet = function () {
//   //created a method
//   console.log(`Hello, my name is ${this.name}`);
// };
// person.greet(); //call the method

// //constructor function
// function car(make, model, year) {
//   this.make = make;
//   this.model = model;
//   this.year = year;
// }
// let car1 = new car("Toyota", "corolla", 2010);
// let car2 = new car("Mitsubishi", "corolla", 2020);
// console.log(car1, car2);

// //iterating over Object Properties
// let student = {
//   name: "Henri",
//   grade: 12,
//   subjects: ["math", "english", "science"],
// };
// for (let key in student) {
//   console.log(`${key}: ${student[key]}`);
// }

//Basic Object Creation
// const person = {
//   name: "John",
//   age :30,
//   city: "London",
// }

// console.log(person.name);
// console.log(person.age);
// console.log(person.city);

//Object Methods
// const person = {
//   name: "John",
//   age: 30,
//   city: "London",
//   greet() {
//     console.log(`Hello, my name is ${this.name}`);
//   },
// };

// person.greet = function(){
//   console.log(`Hello, my name is ${this.name}`);

// }
//person.greet();

//Object iteration
// const person = {
//   name: "John",
//   age: 30,
//   city: "London",
// };

// for (key in person){
//   console.log(`${key}: ${person[key]}`);
// }

//Nested objects

// const student = {
//   name: "Student",
//   grades: ['A', 'B', 'C', 'D'],
//   subjects: ['Math', 'Chem', 'Computer', 'Biology'],
// }

//console.log(student.subjects[0]);

// student.sub = function(){
//   console.log(this.subjects[0],this.grades[1])
// }

// student.sub();

//updating object Properties
// const person = {
//   name: "John",
//   age: 30,
//   city: "London",
// };

// person.age = 35;
// console.log(` New age: ${person.age}`);

//checking Properties
// const person = {
//   name: "John",
//   age: 30,
//   city: "London",
// };

// console.log(person.hasOwnProperty("email"));
// console.log('age' in person);
// console.log(person.city !== undefined);
// if('age' in person) {
//   console.log(`The person's age is ${person.age}`);
//}

// const person = {
//   name: "John",
//   age: 30,
//   city: "London",
// };

// for (key in person) {
//   if (person[city] === person) {
//     console.log("True");
//   }
// }

//Object Destructuring
const person = {
  name: "John",
  age: 30,
  city: "London",
};

const { name, age, city } = person;
console.log(name);
console.log(age);
console.log(city);



//object spread operator

// const person = {
//   name: "John",
//   age: 30,
//   city: "London",
// };

// const person2  = {...person};
// console.log(person2);

//Arrays
// let fruits = ["apple", "banana", "mango"];
// console.log(fruits[0]);
// console.log((fruits[1] = "orange"));
// console.log(fruits.push("grapes")); //adds new element lastly
// console.log(fruits);
// //array methods
// console.log(fruits.pop()); //removes the last element
// console.log(fruits.unshift("kiwi")); //adds an element at the beginning
// console.log(fruits);
// console.log(fruits.indexOf("mango")); //find the index of mango
// for (let i = 0; i < fruits.length; i++) {}
