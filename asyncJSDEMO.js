//callback example
function disp(n) {
    n();
}
disp(function () {
    console.log("Hello");
});

//Aynchronous programming
console.log("Before setTimeout");
setTimeout(function () {
    console.log("Inside setTimeout");
}, 2000);
console.log("After setTimeout");

