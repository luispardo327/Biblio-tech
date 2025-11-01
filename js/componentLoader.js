async function loadComponent(url, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Error al cargar ${url}: ${response.statusText}`);
        }
        const htmlContent = await response.text();
        container.innerHTML = htmlContent;
    } catch (error) {
        console.error(`No se pudo cargar el archivo ${url}.`, error);
        container.innerHTML = `<p style="color: red;">Error al cargar el contenido.</p>`;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // La inyección se hace en el contenedor vacío
    loadComponent('/header.html', 'header-container');
    loadComponent('/footer.html', 'footer-container');
});