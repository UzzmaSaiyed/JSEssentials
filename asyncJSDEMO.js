//callback example
function disp(n) {
    n();
}
disp(function () {
    console.log("Hello");
});

//Aynchronous programming

//setTimeout
console.log("Before setTimeout");
setTimeout(function () {
    console.log("Inside setTimeout");
}, 1000);
console.log("After setTimeout");


// setInterval
console.log("Before setInterval");
const intervalID = setInterval(function () {
    console.log("Inside setInterval");
}, 1000);
console.log("After setInterval");
setTimeout(function () {
    clearInterval(intervalID);
    console.log("Interval cleared");
}, 3000);

//Complex Callback example
function getData(cb) {
    let users = [{ name: 'John', age: 25 }, { name: 'Joe', age: 28 }];
    cb(users);
}
function getHobby(users, cb) {
    let hobby = [{ hobby: "Reading" }, { hobby: "Singing" }];
    cb(hobby);
    // setTimeout(function () {
    //     console.log(users.name);
    // }, 5000);
    console.log(users.name);

}

setTimeout(function () {
    getData(function (users) {
        setTimeout(function () {
            getHobby(users[1], function (hobby) {
                console.log(hobby[1]);
            })
        }, 2000);

    });
}, 6000);

//Promise
new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Hello from Promise");
    }, 8000);
}).then(result => console.log(result));

// The microtask queue(Promise) is processed before the macrotask queue(setTimeout), even if they are scheduled to execute after similar delays. 





