//Creating Variables and performing arithmetic operations

let n1 = 12;
let n2 = 10;
console.log("Addition is " + (n1 + n2) + " Subtraction is " + (n1 - n2));
console.log("Division is " + (n1 / n2) + " Multiplication is " + (n1 * n2));
//Template literals ``
console.log(`Modulus is ${n1 % n2}`);

//Other Operators are ++ --, &&, ||, !, <, >, <=, >=, ==, ===, !==, !=, +=, -= and many more...

//type coercion
let n3 = "20";
let n4 = 20;
console.log(`Addition is ${n3 + n2}`); //concatenation
console.log(`Subtraction is ${n3 - n2}`); //subtraction

console.log(n3 == n4); // true (str is coerced to a number)
console.log(n3 === n4); // false (strict comparison, str is not coerced to a number)

// Conditional statements

//Taking user input

//Only use when using prompt in node.js
//npm init
// npm install prompt-sync
// const prompt = require('prompt-sync')();

let score = prompt("Enter Score from 0 to 100");

if (score >= 90 && score <= 100) {
    console.log("A");
} else if (score >= 80 && score < 90) {
    console.log("B");
} else if (score >= 70 && score < 80) {
    console.log("C");
} else {
    console.log("D");
}

//Nested statements

let temperature = 25;
let isRaining = false;

if (temperature > 30) {
    if (isRaining) {
        console.log("It's hot, but don't forget your umbrella!");
    } else {
        console.log("It's hot, enjoy the weather!");
    }
} else {
    if (isRaining) {
        console.log("It's not too hot, but don't forget your umbrella!");
    } else {
        console.log("It's a pleasant day!");
    }
}

//Switch case

let day = "Monday";

switch (day) {
    case "Monday":
        console.log("It's the start of the workweek.");
        break;
    case "Friday":
        console.log("It's almost the weekend.");
        break;
    default:
        console.log("It's another day.");
}

//Loops

//While loop
let count = 0;

while (count < 5) {
    console.log("Count: " + count);
    count++;
}

//Do While loop
let count2 = 0;

do {
    console.log("Count: " + count);
    count++;
} while (count < 5);

//For loop
for (let i = 0; i < 5; i++) {
    let row = "";
    for (let j = 0; j < 5; j++) {
        row += "* ";
    }
    console.log(row);
}

//break and continue
for (let i = 0; i < 5; i++) {
    if (i === 3) {
        break;
    }
    console.log(i);
}

for (let i = 0; i < 5; i++) {
    if (i === 2) {
        continue;
    }
    console.log(i);
}

//Arrays

let a = [];
let arraysize = prompt("Enter Size for you Array");

for (let i = 0; i < arraysize; i++) {
    let number = prompt(`Enter number ${i + 1}:`);
    a.push(parseInt(number));
}

for (let i = 0; i < arraysize; i++) {
    console.log(a[i]);
}

//js allows you to create arrays of mixed types

let mixedArray = [1, "apple", true, { name: "John" }];
console.log(mixedArray);

//Objects in JS

let netflixMovie = {
    title: "Inception",
    year: 2010,
    director: "Christopher Nolan",
    genres: ["Sci-Fi", "Action", "Thriller"],
    duration: 148,
    isAvailable: true,
    play: function () {
        console.log("Now playing: " + this.title);
    },
    pause: function () {
        console.log("Paused: " + this.title);
    }
};

console.log(netflixMovie.title);
console.log(netflixMovie.year);
console.log(netflixMovie.genres);

netflixMovie.play();
netflixMovie.pause();

//Creating functions 

function add() {
    console.log(2 + 3);
}
add();

function sub(num) {
    console.log(5 - num);
}
sub(3);

//Arrow functions

let mul = () => { console.log(6 * 5); }
let div = () => console.log(6 / 5); //Single line code can be written without parentheses
let demoArrow = () => 89; //No need to write return also

mul();
div();
console.log(demoArrow());

//Class

class Car {
    constructor(brand) {
        this.brand = brand;
    }

    start() {
        console.log(this.brand + " is starting.");
    }
}

let myCar = new Car("Toyota");
myCar.start();

// Array of object

let product = [
    {
        "name": "Laptop",
        "quantity": 15,
        "price": 120000
    },
    {
        "name": "Smartphone",
        "quantity": 30,
        "price": 75000
    },
    {
        "name": "Headphones",
        "quantity": 50,
        "price": 8000
    },
    {
        "name": "Wireless Mouse",
        "quantity": 100,
        "price": 2500
    },
    {
        "name": "Keyboard",
        "quantity": 75,
        "price": 4500
    },
    {
        "name": "Monitor",
        "quantity": 40,
        "price": 30000
    },
    {
        "name": "USB Drive",
        "quantity": 200,
        "price": 1500
    },
    {
        "name": "External Hard Drive",
        "quantity": 25,
        "price": 10000
    },
    {
        "name": "Tablet",
        "quantity": 20,
        "price": 45000
    },
    {
        "name": "Webcam",
        "quantity": 60,
        "price": 5500
    }
];

let flag = true;
function displayProducts() {
    if (flag === true) {
        let output = document.getElementById('output');
        output.textContent = JSON.stringify(product, null, 2);
        let b = document.getElementById('disp');
        b.textContent = 'Hide Products';
        flag = false;
    } else {
        let output = document.getElementById('output');
        output.textContent = '';
        let b = document.getElementById('disp');
        b.textContent = 'Display Products';
        flag = true;

    }

}


//Callback function

function addProduct(name, a, b) {
    console.log("This is an example of a simple callback function with parameters", a + b);
    name(23);
}

addProduct(function (c) {
    console.log("Callback function called", c);
}, 5, 6)

//callback function with arrow function

delProducts = (name, a, b) => {
    console.log("This is an example of a callback arrow function", b - a);
    name(28);
}

delProducts((d) => {
    console.log("Callback arrow function called", d);
}, 5, 10)

//For each loop

let numbers = [1, 2, 3, 4, 5];
let sum = 0;
numbers.forEach((element, index, array) => {
    // we can pass any parameter mentioned above
    console.log(element, index, array);
    sum += element;
});

console.log("Sum of numbers: ", sum);

//Map
//Map always return something

let mapArray = numbers.map((element) => {
    return element * 2;
});

console.log("Map Array: ", mapArray);

let flowerArray = [
    {
        name: "a", color: "Red", smell: "sweet", existsIn: "Antarctica"
    },
    {
        name: "b", color: "Yellow", smell: "sour", existsIn: "Bermuda"
    },
    {
        name: "c", color: "Green", smell: "sweet", existsIn: "New Zealand"
    },
    {
        name: "d", color: "Blue", smell: "sweet", existsIn: "Australia"
    },
    {
        name: "e", color: "Purple", smell: "sweet", existsIn: "Antarctica"
    }
]

let mapFlowers = flowerArray.map((element) => {
    return element.name;
});

console.log("Flower names are", mapFlowers)

//Filter

let filterArray = flowerArray.filter((element) => {
    return element.color === "Red";
    // return all elements whose above condition is true
});

console.log("Filter Array: ", filterArray);

//Find

let findFlower = flowerArray.find((element) => {
    return element.smell === "sweet";
    // return only 1st element whose above condition is true
});

console.log("Found Flower", findFlower);

//destructuring

// let obj = { name: "John", age: 30 };
// let name = obj.name
// let age = obj.age

let obj2 = { name: "John", age: 30 };
let { name, age } = obj2;
console.log("Name", name);

//Spread Operator, Array destructuring

let n = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Array:", n);
console.log("Spread Operator", ...n);

//simple copying, no new array created and both variables point to same memeory
let newArray = n;

//copying the array and creating new array
let arr = [...n];

n[0] = 10;

console.log("New Array:", newArray);
console.log("Array after spread operator", arr);

//joining the array
let arr2 = [...n, ...arr];
console.log("Array after merging", arr2);

//rest parameter
function doDisplay(b, ...a) {
    console.log(b, a);
}
doDisplay(21, 212, 33, 42, 53);


























