// arraylength
/*
const array = [1, 2, 3, 4, 5];
console.log("Array length:", array.length);
*/
// to string
/*
const array = [1, 2, 3, 4, 5];
console.log("array as string;", array.toString());
*/
// array pop
/*
const array = [1, 2, 3, 4, 5];
const lastelement = array.pop();
console.log("lastelement;", lastelement);
console.log("modified element;", array);
*/
// Array push
/*
const array = [1, 2, 3, 4, 5];
array.push(6);
console.log("array;", array.push());
*/
/*
const array = [1, 2, 3, 4, 5];
const addingelement = array.push(6);
console.log("array;", array.push());
console.log("addingelement;", addingelement);
*/
// shift
/*
const array = [1, 2, 3, 4, 5];
const firstelement = array.shift(1);
console.log("array;", array.shift(1));
console.log("firstelement;", firstelement);
*/
// unshift
/*
const array = [1, 2, 3, 4, 5];
console.log("array;", array);
*/
// join array
/*
const array = [1, 2, 3, 4, 5];
const joinedstring = array.join("-");
console.log("joined string:", joinedstring);
*/
// delete array
/*
let array = [1, 2, 3, 4, 5];
let value = delete array[2];
console.log(value);
console.log("modified array:", array);
*/
// concatenated array
/*
const array1 = [1, 2, 3];
const array2 = [4, 5];
const newarray = array1.concat(array2);
console.log("concatened array:", newarray);
*/
/*
// splice
let array = [1, 2, 3, 4, 5, 6];
const removeElement = array.splice(1, 2, "a", "b","c");
console.log("modified array:", array);
console.log("removeelement:", removeElement);
*/
// slice
const array = [1, 2, 3, 4, 5];
const slicearray = array.slice(1, 4);
console.log("modified array:",slicearray);
