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
    task: 'Traveling to Dhamar',
    isComplated: true
}, {
    id: 1,
    task: 'Keyboard Practice',
    isComplated: false
}];

const mapTodo = todos.map(function(todo) {
    return todo.task;
})





//json format
const todoJson = JSON.stringify(todos);

//console.log(todoJson);