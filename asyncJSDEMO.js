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

//Callback example with asynchronous functions
//Callback hell example
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

//Promise example with asynchronous functions

async function getDataNew() {
    const prom = new Promise(function (resolve, reject) {
        let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        // let a = [];
        if (a.length > 0) {
            resolve(a);
        }
        else {
            reject("No data available");
        }

    });
    return prom;
}

getDataNew().then(function (data) {
    console.log(data);
    getData((users) => {
        console.log(users);
    });
}).catch(function (e) {
    console.log(e);
});

async function getUser() {
    return new Promise(function (resolve, reject) {

        let users = [{ name: 'Johnny', age: 35 }, { name: 'Joey', age: 18 }];
        if (users.length > 0) {
            resolve(users);
        }
        else {
            reject("No data available");
        }

    });

}

getDataNew().then(function (data) {
    getUser().then(
        function (data) {
            console.log(data[0]);
        }).catch(function (e) {
            console.log(e);
        }
        )
}).catch(function (e) {
    console.log(e);
}
);

//Better way to handle above snippet is below
//Promise chaining
getDataNew().then(function (data) {
    return getUser()
}).then(function (data) {
    console.log(data[0]);
})
    .catch(function (e) {
        console.log(e);
    }
    );


//Calling API

fetch("https://jsonplaceholder.typicode.com/post")
    .then((response) => {
        if (!response.ok) {
            // Manually trigger an error for non-successful HTTP statuses else it will return a fulfilled promise and an empty object
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then((data) => {
        console.log(data)
    })
    .catch((e) => { console.log("Error fetching JSON API " + e) })


//Async/Await
async function fetchData() {
    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/posts");
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        let data = await response.json()
        console.log(data);
    }
    catch (e) {
        console.log("Error fetching JSON API " + e);
    }

}

fetchData();




