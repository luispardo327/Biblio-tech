// 1. Tus Datos (Los que ya tenías)
const searchData = [
  {
    title: "Libros electrónicos",
    description: "Aprende qué es un libro electrónico.",
    url: "/pages/librosElectronicos.html" // Asegúrate que la ruta inicie con /
  },
  {
    title: "Bases de datos",
    description: "Descubre las principales bases de datos académicas.",
    url: "#"
  },
  {
    title: "Estrategias de búsqueda",
    description: "Técnicas para encontrar información confiable.",
    url: "#"
  },
  {
    title: "Tesauros",
    description: "Aprende qué es un tesauro.",
    url: "#"
  },
  {
    title: "Operadores booleanos",
    description: "Combina palabras clave usando AND, OR, NOT.",
    url: "#"
  }
];

// 2. Función Principal (se ejecuta cuando el documento está listo)
document.addEventListener('DOMContentLoaded', () => {
    
    // Usamos un "Observador" porque tu header se carga DESPUÉS de que inicia la página.
    // Esto vigila el cuerpo de la página hasta que aparezca el buscador.
    const observer = new MutationObserver((mutations, obs) => {
        const searchInput = document.getElementById('search-input');
        const resultsContainer = document.getElementById('search-results');

        if (searchInput && resultsContainer) {
            // ¡Encontramos el buscador! Iniciamos la lógica
            initSearchLogic(searchInput, resultsContainer);
            obs.disconnect(); // Dejamos de vigilar
        }
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
});

// 3. La Lógica del Buscador
function initSearchLogic(input, container) {
    
    input.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        container.innerHTML = ''; // Limpiar resultados anteriores

        // Si el campo está vacío, ocultamos la caja
        if (searchTerm === '') {
            container.style.display = 'none';
            return;
        }

        // Filtramos los datos
        const filteredData = searchData.filter(item => 
            item.title.toLowerCase().includes(searchTerm) || 
            item.description.toLowerCase().includes(searchTerm)
        );

        // Si no hay resultados
        if (filteredData.length === 0) {
            container.innerHTML = '<div class="search-result-item"><p>No se encontraron resultados</p></div>';
            container.style.display = 'block';
            return;
        }

        // Crear los elementos HTML para cada resultado
        filteredData.forEach(item => {
            const div = document.createElement('div');
            div.classList.add('search-result-item');
            
            div.innerHTML = `
                <a href="${item.url}">
                    ${item.title}
                    <p>${item.description}</p>
                </a>
            `;
            container.appendChild(div);
        });

        container.style.display = 'block';
    });

    // Ocultar resultados si hacemos clic fuera
    document.addEventListener('click', (e) => {
        if (!input.contains(e.target) && !container.contains(e.target)) {
            container.style.display = 'none';
        }
    });
}