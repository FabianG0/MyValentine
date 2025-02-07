let attempts = 0;
const yesTexts = ["¿Segura?", "Piensa bien...", "Vamos, di que sí", "No seas tímida", "Te arrepentirás", "Solo queda una opción"];
const audio = document.getElementById("audio");

document.getElementById("noBtn").addEventListener("click", moveNo);
document.getElementById("yesBtn").addEventListener("click", redirect);
document.getElementsByName(bod)
function moveNo() {
    playAudio();
    if (attempts < 5) {
        console.log(window.innerWidth)
        let x = Math.random() * (window.innerWidth/5) - Math.random() * (window.innerWidth/5) ;
        let y = Math.random() * (window.innerHeight/5) - Math.random() * (window.innerHeight/5);
        console.log(x, y)
        document.getElementById("noBtn").style.transform = `translate(${x}px, ${y}px)`;
        document.getElementById("yesBtn").textContent = yesTexts[attempts];
        attempts++;
    } else {
        document.getElementById("noBtn").remove();
        document.getElementById("yesBtn").textContent = "¡No hay escapatoria!";
    }
}

function redirect() {
    playAudio();
    window.location.href = "./acepted.html";
}

function playAudio() {
    audio.play();
}