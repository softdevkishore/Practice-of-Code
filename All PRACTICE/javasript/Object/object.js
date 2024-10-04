// creating object
/*
const person = {
  name: "kishore",
  age: 45,
  developer: "software",
};
console.log(person.name);
console.log(person.age);
console.log(person.developer);
*/

// modifying object
/*
const person = {
  Name: "kishore",
  Age: 45,
  profession: "designer",
};
person.profession = "drawing teacher";
console.log(person.profession);
console.log(person);
*/

// adding array
/*
const person={
  Name: "kishore",
  age:30
}
person.profession="developer"
console.log(person);
*/

// deleting object
/*
const person = {
  Name: "kishore",
  age: 50,
  profession: "software",
};
delete person.age;
console.log(person);
*/

// multiple data object
const array = [1, 2, 3, 4, 5];
const cars = {
  Name: "BMW",
  price: 50000,
};
const person = {
  Name: "kishore",
  age: 50,
  profession: "software",
  data: array,
  detail: cars,
};
console.log(person);
