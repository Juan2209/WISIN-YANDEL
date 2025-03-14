const hamburuesa = document.querySelector('.hamburguesa');
const navegacion = document.querySelector('.navegacion');
const enlaces = document.querySelectorAll('navegacion a');
const fecha = document.querySelector('.fecha');
console.log(enlaces);

document.addEventListener('DOMContentLoaded', () => {
    mostrarMenu();
    cerrarMenu();
    fechaAcutal();
});
function mostrarMenu() {
    hamburuesa.addEventListener('click', () => {
        navegacion.classList.toggle('ocultar');
    });
}
function cerrarMenu() {
    enlaces.forEach(enlace => {
        enlace.addEventListener('click', (e) => {
            e.preventDefault();
            const seccion = document.querySelector(e.target.attributes.href.value);
            cambioSeccion();

            if (e.target.tagName === 'A') {
                navegacion.classList.add('ocultar');
            }
        });
    });
}
function cambioSeccion() {
    cambioSeccion.scrollIntoView({ behavior: 'smooth' });
}
function fechaAcutal() {
    let fechaHoy = new Date().getFullYear();
    fecha.textContent = fechaHoy;
}
// FUNCIONES PARA MOSTRAR Y OCULTAR LETRAS DE CANCIONES

function toggleLyrics(lyricsId) {
    // Obtener el elemento de letra por su ID
    const lyricsElement = document.getElementById(lyricsId);
    
    // Importante: obtener el botón que se hizo clic
    const button = event.currentTarget;
    
    // Verificar si la letra está visible u oculta
    if (lyricsElement.style.display === "none") {
        // Mostrar la letra
        lyricsElement.style.display = "block";
        button.textContent = "Ocultar letra";
    } else {
        // Ocultar la letra
        lyricsElement.style.display = "none";
        button.textContent = "Ver letra";
    }
}