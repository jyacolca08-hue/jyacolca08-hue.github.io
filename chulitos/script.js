let reproduciendo = false;
function controlMusica() {
    const musica = document.getElementById("musica");
    const boton = event.target;

    if (!reproduciendo) {
        musica.play();
        boton.innerHTML = "⏸️ Pausar música";
        reproduciendo = true;
    } else {
        musica.pause();
        boton.innerHTML = "🎶 Reproducir música";
        reproduciendo = false;
    }
}

function mostrarSaludo() {
    const nombre = document.getElementById("nombre").value;

    if (nombre.trim() === "") {
        alert("Por favor escribe un nombre 🎅");
        return;
    }

document.getElementById("saludo").innerHTML =
    `🎅🎄 Feliz Navidad <strong>${nombre}</strong> 🎄🎅<br><br>
    Que esta hermosa noche esté llena de <strong>amor, paz y alegría</strong> 🎁🌟<br>
    Que cada sonrisa ilumine tu hogar y que la esperanza renazca en tu corazón 💖<br><br>
    🎄 Que el Niño Jesús bendiga tu vida y la de tu familia <br>
    y que el próximo año llegue cargado de <strong>salud, éxitos y sueños cumplidos</strong> 🌟<br><br>
    Con mucho cariño, <br>
    <strong>🎅L@s Chulit@s de Mielda🎅</strong>`;
}
