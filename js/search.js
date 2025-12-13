// js/search.js

    const searchData = [
    {
      title: "Libros electrónicos",
      description: "Aprende qué es un libro electrónico, cómo se usa y cómo identificar si es confiable.",
      url: "/Biblio-tech/pages/librosElectronicos.html"
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

    function initSearchLogic(input, container) {
    input.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        container.innerHTML = '';

            if (searchTerm.length < 2) { 
            container.style.display = 'none';
            return;
        }

            const filteredData = searchData.filter(item => 
            item.title.toLowerCase().includes(searchTerm) || 
            item.description.toLowerCase().includes(searchTerm)
        );

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

        document.addEventListener('click', (e) => {
        if (!input.contains(e.target) && !container.contains(e.target)) {
            container.style.display = 'none';
        }
    });
}

    document.addEventListener('headerLoaded', () => {
    const searchInput = document.getElementById('searchInput'); 
    const resultsContainer = document.getElementById('search-results');

    if (searchInput && resultsContainer) {
        initSearchLogic(searchInput, resultsContainer);
        console.log("🔎 Buscador inicializado.");
    }
    });