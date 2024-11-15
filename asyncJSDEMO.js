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
}, 5000);





