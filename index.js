let attempts = 0;
const yesTexts = ["¿Segura?", "Piensa bien...", "Vamos, di que sí", "No seas tímida", "Te arrepentirás", "Solo queda una opción"];

document.getElementById("noBtn").addEventListener("click", moveNo);
document.getElementById("yesBtn").addEventListener("click", redirect);

function moveNo() {
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
    window.location.href = "./acepted.html"; // Cambia esto por tu URL de destino
}