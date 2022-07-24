//variable types
const name = 'Abdulrahman'
let age = 30
const gender = 1
const isSelected = true;
const lastName = undefined;
const country = null

let val;


// console.log(typeof val + ` The age is ${age} and the name is ${name}`);


//arrays

const fruits = ['apples', 'bananas', 'strawberries'];

fruits.shift();
// console.log(Array.isArray(fruits));


//objects
//literal objects
const laptop = {
    id: 1,
    brand: 'Mac',
    price: 3000,
    currency: 'dollars',
    availabeColors: [
        'white',
        'black',
        'gray',
    ],
    models: {
        model1: 'mac e book 3000',
        model2: 'mac e book 2500',
        model3: 'mac e book 4000',

    }

}

const { brand, price, models: { model1 } } = laptop;
// console.log(model2);




//array of objects
const todos = [{
        id: 1,
        task: 'Traveling',
        isComplated: false
    }, {
        id: 2,
        task: 'Typing Practice',
        isComplated: false
    },
    {
        id: 3,
        task: 'Reading',
        isComplated: true
    }
];



//flitering the tasks according to the complated tasks
const todoCompleted = todos.filter(function(todo) {
    return todo.isComplated === false;
}).map(function(todo) {
    return todo.task
})

// console.log(todoCompleted)



//maping the and returning the tasks
const mapTodo = todos.map(function(todo) {
    return todo.task;
})


//json format
const todoJson = JSON.stringify(todos);

//console.log(todoJson);

const x = 9;

//ternary operator
const color = x > 8 ? 'blue' : 'red'

// console.log(color);


//functions

function summation(num1 = 2, num2 = 2) {
    return num1 + num2;
}

// console.log(summation())




//arrow functions

const sumTwoNumbers = (num1 = 1, num2 = 1) =>
    num1 + num2;


// console.log(sumTwoNumbers(4, 3));




//oop 


function person(firstName, lastName, DateOfBirth) {

    this.firstName = firstName;
    this.lastName = lastName;
    this.DateOfBirth = new Date(DateOfBirth);




}

person.prototype.birthYear =
    function() {
        return this.DateOfBirth.getFullYear()

    }
person1 = new person('Abdulrahman', 'Ahmed', '1996-08-18');
// console.log(person1.birthYear());


//class 

class Person {
    constructor(firstName, lastName, dateOfBirth) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dateOfBirth = new Date(dateOfBirth);
    }
    birthYear() {
        return this.DateOfBirth.getFullYear()
    }
    fullName() {
        return `${this.firstName} ${this.lastName}`
    }
}

person2 = new Person('Ali', 'Mohammed', '1999-9-2');
// console.log(person2.fullName());