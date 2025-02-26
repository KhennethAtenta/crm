
function displayMessage() {

    let audio = new Audio("{{ url_for('static', filename='notification.mp3') }}");
    audio.play();


    let messageBox = document.createElement("div");
    messageBox.classList.add("popup-message");
    messageBox.innerHTML = "🚀 Hello, welcome to my enhanced Flask website!";


    document.body.appendChild(messageBox);
    setTimeout(() => {
        messageBox.style.opacity = "0";
        setTimeout(() => messageBox.remove(), 500);
    }, 2500);
}
function toggleMode() {

    document.body.classList.toggle("light-mode");


    if (document.body.classList.contains("light-mode")) {
        localStorage.setItem("theme", "light");
    } else {
        localStorage.setItem("theme", "dark");
    }
}


document.addEventListener("DOMContentLoaded", function () {
    if (localStorage.getItem("theme") === "light") {
        document.body.classList.add("light-mode");
    }
});
