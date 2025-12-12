// Este script asume que la variable 'searchData' ya existe (cargada desde searchData.js)

// 1. Función Principal con el Vigilante (MutationObserver)
document.addEventListener('DOMContentLoaded', () => {
    
    // Este observador es crucial porque espera a que el header (inyectado) aparezca.
    const observer = new MutationObserver((mutations, obs) => {
        // Obtenemos los elementos por ID del header inyectado
        const searchInput = document.getElementById('search-input');
        const resultsContainer = document.getElementById('search-results');

        // Solo si ambos elementos existen, iniciamos la lógica de búsqueda
        if (searchInput && resultsContainer) {
            initSearchLogic(searchInput, resultsContainer);
            obs.disconnect(); // Desactivamos el vigilante para ahorrar recursos
        }
    });

    // Empezamos a observar todo el cuerpo de la página
    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
});

// 2. La Lógica del Buscador
function initSearchLogic(input, container) {
    
    input.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        container.innerHTML = ''; // Limpiar resultados

        if (searchTerm.length < 2) { // Buscar solo si hay al menos 2 letras
            container.style.display = 'none';
            return;
        }

        // Filtramos los datos (la variable searchData viene del otro archivo JS)
        const filteredData = searchData.filter(item => 
            item.title.toLowerCase().includes(searchTerm) || 
            item.description.toLowerCase().includes(searchTerm)
        );

        // Generar HTML
        if (filteredData.length === 0) {
            container.innerHTML = '<div class="search-result-item"><p>No se encontraron resultados</p></div>';
        } else {
            filteredData.forEach(item => {
                const div = document.createElement('div');
                div.classList.add('search-result-item');
                
                div.innerHTML = `<a href="${item.url}">
                    ${item.title}
                    <p>${item.description}</p>
                </a>`;
                container.appendChild(div);
            });
        }
        container.style.display = 'block';
    });

    // Ocultar resultados al hacer clic fuera
    document.addEventListener('click', (e) => {
        if (!input.contains(e.target) && !container.contains(e.target)) {
            container.style.display = 'none';
        }
    });
}