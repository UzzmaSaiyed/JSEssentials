//dom manipulation and event handling

//This function is now called event listener and now also has access to a built-in object event (deprecated).
function changeText() {
    // console.log(event);
    document.getElementById("text").innerHTML = "Text completely changed and replaced...";
    console.log("Button clicked");
}


function animateNew() {
    // document.getElementById("sec").innerText = "<p>Hello, world!</p>";
    let a = document.getElementById("sec");
    a.innerHTML = "<h1>Hello, world!</h1>";

    a.style.height = "200px";
    a.style.backgroundColor = "yellowGreen";
    a.style.marginLeft = "500px";

}

function rotateImage() {
    let a = document.getElementById("third");
    a.style.transform = "rotateZ(28000deg)";
}

