// stringify
/*
const person = {
  name: "kishore",
  age: 30,
  developer: "software",
};
const jsonstring = JSON.stringify(person);
console.log(jsonstring);
*/
// parse
const jsonstring = '{ "name": "kishore", "age": 30, "developer": "software" }';
const person = JSON.parse(jsonstring)
console.log(jsonstring);
console.log(person);
