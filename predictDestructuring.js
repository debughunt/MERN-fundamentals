const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars
const [ ,otherRandomCar ] = cars
//Predict the output
console.log(randomCar) 
// will output the first index value
console.log(otherRandomCar)
// will output the second index value

const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { name: otherName } = employee;
//Predict the output
console.log(name);
// will throw an error since name is not defined on its own
console.log(otherName);
// Will print elon

const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;  
//Predict the output
console.log(password);
// will print '12345'
console.log(hashedPassword);
// Will throw an error since the obj person does not have a password attribute

const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers;
const [,,,second] = numbers;
const [,,,,,,,,third] = numbers;
//Predict the output
console.log(first == second);
// will output false since numbers[1] != numbers[3]
console.log(first == third);
// will output true since numbers[1] == numbers[7]

const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [ ,willThisWork] = secondKey;
//Predict the output
console.log(key);
// will print 'value'
console.log(secondKey);
// will print the array
console.log(secondKey[0]);
// will print the value at array position 0
console.log(willThisWork);
// will print the second value in the array











