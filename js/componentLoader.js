// js/componentLoader.js

async function loadComponent(url, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`Error al cargar ${url}`);

        const html = await response.text();
       container.innerHTML = html;

        console.log(`✅ Componente cargado: ${url}`);

        if (url.includes("header.html")) {
            document.dispatchEvent(new Event("headerLoaded"));
        } else if (url.includes("footer.html")) {
            document.dispatchEvent(new Event("footerLoaded"));
        }
    } catch (err) {
        console.error("❌ Error cargando componente:", err);
    }
}

document.addEventListener("DOMContentLoaded", async () => {
    await loadComponent("/Biblio-tech/components/header.html", "header-container");
    await loadComponent("/Biblio-tech/components/footer.html", "footer-container");
});
