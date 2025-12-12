// js/search.js

// 1. DATA: Lista de libros para la búsqueda.
const searchData = [
    {
      title: "Libros electrónicos",
      description: "Aprende qué es un libro electrónico, cómo se usa y cómo identificar si es confiable.",
      url: "./pages/librosElectronicos.html"
    },
    {
      title: "Bases de datos",
      description: "Descubre las principales bases de datos académicas y cómo usarlas.",
      url: "#"
    },
    {
      title: "Estrategias de búsqueda de información",
      description: "Técnicas para encontrar información confiable y relevante.",
      url: "#"
    },
    {
      title: "Tesauros",
      description: "Aprende qué es un tesauro y cómo usarlo para mejorar tus búsquedas.",
      url: "#"
    },
    {
      title: "Operadores booleanos",
      description: "Combina palabras clave usando operadores lógicos como AND, OR y NOT.",
      url: "#"
    }
];

// 2. LÓGICA DEL BUSCADOR: Filtra la data y actualiza el HTML.
function initSearchLogic(input, container) {
    
    // Escucha cada vez que el usuario escribe.
    input.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        container.innerHTML = ''; 

        // Oculta si el término es muy corto.
        if (searchTerm.length < 2) { 
            container.style.display = 'none';
            return;
        }

        // Filtra la data si el término está en el título o descripción.
        const filteredData = searchData.filter(item => 
            item.title.toLowerCase().includes(searchTerm) || 
            item.description.toLowerCase().includes(searchTerm)
        );

        // Muestra los resultados o el mensaje de no encontrado.
        if (filteredData.length === 0) {
            container.innerHTML = '<div class="search-result-item"><p>No se encontraron resultados</p></div>';
        } else {
            filteredData.forEach(item => {
                const div = document.createElement('div');
                div.classList.add('search-result-item');
                div.innerHTML = `<a href="${item.url}">${item.title}<p>${item.description}</p></a>`;
                container.appendChild(div);
            });
        }
        container.style.display = 'block';
    });

    // Oculta resultados al hacer clic fuera.
    document.addEventListener('click', (e) => {
        if (!input.contains(e.target) && !container.contains(e.target)) {
            container.style.display = 'none';
        }
    });
}

// 3. INICIO SEGURO: Espera el evento 'headerLoaded' para asegurar que el header está en la página.
document.addEventListener('headerLoaded', () => {
    // Busca los IDs del buscador.
    const searchInput = document.getElementById('search-input');
    const resultsContainer = document.getElementById('search-results');
    
    // Si los encuentra, inicializa el motor.
    if (searchInput && resultsContainer) {
        initSearchLogic(searchInput, resultsContainer);
        console.log("✅ Motor de búsqueda inicializado.");
    }
});