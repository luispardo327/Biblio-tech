document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;

    const mainAccessibilityButton = document.getElementById('main-accessibility-button');
    const accessibilityOptions = document.getElementById('accessibility-options');

    const btnAumentar = document.getElementById('btn-aumentar-fuente');
    const btnDisminuir = document.getElementById('btn-disminuir-fuente');
    const btnContraste = document.getElementById('btn-alto-contraste');
    const btnRestablecer = document.getElementById('btn-restablecer');

    let currentFontSize = parseInt(localStorage.getItem('fontSize') || '0', 10); // Cargar desde localStorage
    let isHighContrast = localStorage.getItem('highContrast') === 'true'; // Cargar desde localStorage

    // Función para aplicar los estados guardados al cargar la página
    function applySavedStates() {
        if (isHighContrast) {
            body.classList.add('high-contrast');
        }
        updateFontSize(); // Aplica el tamaño de fuente guardado
    }

    function updateFontSize() {
        body.classList.remove('font-large', 'font-larger', 'font-small');
        if (currentFontSize === 1) {
            body.classList.add('font-large');
        } else if (currentFontSize === 2) {
            body.classList.add('font-larger');
        } else if (currentFontSize === -1) {
            body.classList.add('font-small');
        }
        localStorage.setItem('fontSize', currentFontSize); // Guardar en localStorage
    }

    mainAccessibilityButton.addEventListener('click', () => {
        accessibilityOptions.classList.toggle('hidden');
    });

    btnAumentar.addEventListener('click', () => {
        if (currentFontSize < 2) {
            currentFontSize++;
            updateFontSize();
        }
    });

    btnDisminuir.addEventListener('click', () => {
        if (currentFontSize > -1) {
            currentFontSize--;
            updateFontSize();
        }
    });

    btnContraste.addEventListener('click', () => {
        isHighContrast = !isHighContrast; // Invertir el estado
        body.classList.toggle('high-contrast', isHighContrast); // Usar segundo argumento de toggle
        localStorage.setItem('highContrast', isHighContrast); // Guardar en localStorage
    });

    btnRestablecer.addEventListener('click', () => {
        body.classList.remove('font-large', 'font-larger', 'font-small', 'high-contrast');
        currentFontSize = 0;
        isHighContrast = false;
        localStorage.removeItem('fontSize'); // Eliminar de localStorage
        localStorage.removeItem('highContrast'); // Eliminar de localStorage
        accessibilityOptions.classList.add('hidden');
    });

    document.addEventListener('click', (event) => {
        if (!accessibilityOptions.contains(event.target) && !mainAccessibilityButton.contains(event.target)) {
            accessibilityOptions.classList.add('hidden');
        }
    });

    // Llama a esta función al cargar la página para aplicar los estilos guardados
    applySavedStates();
});