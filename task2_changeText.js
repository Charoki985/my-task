let button = document.getElementById("btn");
let message = document.getElementById("message");

button.addEventListener("click", function() {
    message.textContent = "クリックされました！";
});