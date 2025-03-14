// Función para animar contadores
function animarContadores() {
    // Seleccionar todos los elementos con clase "numero"
    const contadores = document.querySelectorAll('.numero');
    
    // Para cada contador
    contadores.forEach(contador => {
        // Obtener el valor final desde el atributo data-valor
        const valorFinal = parseInt(contador.getAttribute('data-valor'));
        // Valor inicial
        let valorActual = 0;
        // Calcular el incremento según el valor final
        // Valores más grandes tendrán incrementos mayores
        const incremento = valorFinal > 100 ? 5 : (valorFinal > 20 ? 1 : 0.2);
        // Duración de la animación (aproximadamente 2 segundos)
        const duracion = 2000;
        // Calcular el intervalo entre actualizaciones
        const intervalo = duracion / (valorFinal / incremento);
        
        // Iniciar la animación
        const animacion = setInterval(() => {
            valorActual += incremento;
            // Si superamos el valor final, establecerlo exactamente
            if (valorActual >= valorFinal) {
                contador.textContent = valorFinal;
                clearInterval(animacion);
            } else {
                // Redondear para evitar decimales en la visualización
                contador.textContent = Math.floor(valorActual);
            }
        }, intervalo);
    });
}

// Función para verificar si un elemento está visible en la pantalla
function esVisible(elemento) {
    const posicion = elemento.getBoundingClientRect();
    return (
        posicion.top >= 0 &&
        posicion.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    );
}

// Iniciar animación cuando el usuario hace scroll y llega a la sección
function iniciarAnimacionAlScrollear() {
    const seccionEstadisticas = document.querySelector('.estadisticas');
    
    // Si la sección ya es visible al cargar la página, iniciar animación
    if (seccionEstadisticas && esVisible(seccionEstadisticas)) {
        animarContadores();
        // Remover listener, ya no es necesario
        window.removeEventListener('scroll', verificarVisibilidad);
    }
}

// Función para verificar visibilidad al hacer scroll
function verificarVisibilidad() {
    const seccionEstadisticas = document.querySelector('.estadisticas');
    
    if (seccionEstadisticas && esVisible(seccionEstadisticas)) {
        animarContadores();
        // Remover listener, ya no es necesario
        window.removeEventListener('scroll', verificarVisibilidad);
    }
}

// Agregar evento de scroll
window.addEventListener('scroll', verificarVisibilidad);

// Verificar visibilidad al cargar la página
document.addEventListener('DOMContentLoaded', iniciarAnimacionAlScrollear);