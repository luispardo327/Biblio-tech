document.addEventListener('DOMContentLoaded', function() {
    // 1. Funcionalidad del Menú Hamburguesa

    // Obtenemos las referencias a los elementos HTML
    const menuToggle = document.getElementById('menu-toggle'); // El botón hamburguesa
    const navElement = document.querySelector('nav'); // La etiqueta <nav> que contiene el menú principal
    
    // console.log para depuración (puedes borrarlos una vez que todo funcione)
    console.log('JS cargado. menuToggle:', menuToggle);
    console.log('JS cargado. navElement:', navElement);

    // Verificamos que ambos elementos existan antes de añadir el evento
    if (menuToggle && navElement) {
        menuToggle.addEventListener('click', function() {
            // Alternar la clase 'active' en la etiqueta <nav>
            navElement.classList.toggle('active');

            // console.log para depuración
            console.log('Clic en menuToggle. navElement.classList:', navElement.classList);

            // Cambiar el ícono de hamburguesa a 'X' y viceversa
            const icon = menuToggle.querySelector('i');
            if (navElement.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times'); // Cambia a icono de 'X'
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars'); // Vuelve a icono de barras
            }
        });
    }

    // 2. Funcionalidad del Dropdown de "Cursos" (Submenú)

    // Obtenemos la referencia al enlace "Cursos" que actúa como toggle
    const dropdownToggle = document.querySelector('.dropdown .dropbtn');

    // console.log para depuración
    console.log('JS cargado. dropdownToggle:', dropdownToggle);

    // Verificamos que el elemento exista
    if (dropdownToggle) {
        dropdownToggle.addEventListener('click', function() {

            // El elemento padre del 'dropbtn' es el <li> con la clase 'dropdown'
            const parentDropdownLi = dropdownToggle.parentElement; 
            
            // Alternar la clase 'active' en el <li> padre para mostrar/ocultar el submenú
            parentDropdownLi.classList.toggle('active');

            // console.log para depuración
            console.log('Clic en dropdownToggle. parentDropdownLi.classList:', parentDropdownLi.classList);

            // Opcional: Cerrar otros dropdowns si hay múltiples (no aplica mucho con solo uno)
            // Puedes añadir lógica aquí si en el futuro tienes más dropdowns
        });
    }

    // 3. Funcionalidad del Menú de Accesibilidad

    // Obtener referencias a los botones y el contenedor
    const mainAccessibilityButton = document.getElementById('main-accessibility-button');
    const accessibilityOptions = document.getElementById('accessibility-options');
    const btnAumentarFuente = document.getElementById('btn-aumentar-fuente');
    const btnDisminuirFuente = document.getElementById('btn-disminuir-fuente');
    const btnAltoContraste = document.getElementById('btn-alto-contraste');
    const btnRestablecer = document.getElementById('btn-restablecer');
    const body = document.body; // El <body> es donde aplicaremos las clases de accesibilidad

    // console.log para depuración
    console.log('JS cargado. mainAccessibilityButton:', mainAccessibilityButton);
    console.log('JS cargado. accessibilityOptions:', accessibilityOptions);


    // Toggle del menú de opciones de accesibilidad
    if (mainAccessibilityButton && accessibilityOptions) {
        mainAccessibilityButton.addEventListener('click', function() {
            accessibilityOptions.classList.toggle('hidden');
        });
    }

    // Funcionalidad de tamaño de fuente
    if (btnAumentarFuente && btnDisminuirFuente) {
        btnAumentarFuente.addEventListener('click', function() {
            if (body.classList.contains('font-small')) {
                body.classList.replace('font-small', 'font-large');
            } else if (body.classList.contains('font-large')) {
                body.classList.replace('font-large', 'font-larger');
            } else {
                body.classList.add('font-large');
            }
        });

        btnDisminuirFuente.addEventListener('click', function() {
            if (body.classList.contains('font-larger')) {
                body.classList.replace('font-larger', 'font-large');
            } else if (body.classList.contains('font-large')) {
                body.classList.replace('font-large', 'font-small');
            } else {
                body.classList.add('font-small');
            }
        });
    }

    // Funcionalidad de alto contraste
    if (btnAltoContraste) {
        btnAltoContraste.addEventListener('click', function() {
            body.classList.toggle('high-contrast');
        });
    }

    // Funcionalidad de restablecer
    if (btnRestablecer) {
        btnRestablecer.addEventListener('click', function() {
            body.classList.remove('font-small', 'font-large', 'font-larger', 'high-contrast');
        });
    }
});