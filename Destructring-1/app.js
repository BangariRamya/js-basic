const numbersArray = ['apple', 'orange', 'peach'];
//TODO destructure the array so that 2 variables apple and peach hold values at indexes 0 and 2 in the array
const [a, ,p] = numbersArray;
console.log(a,p);

const person = {
           name: 'abcde',
           age: 10,
           gender: 'm'
          }
// TODO destructure the object to extract name and age of the person  
const {name, age} = person;
console.log(name, age);         