// js/componentLoader.js

async function loadComponent(url, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`Error al cargar ${url}`);

        const html = await response.text();
        container.innerHTML = html;

        if (url.includes("header.html")) {
            document.dispatchEvent(new Event("headerLoaded"));
        }
    } catch (err) {
        console.error(err);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    loadComponent("/Biblio-tech/components/header.html", "header-container");
    loadComponent("/Biblio-tech/components/footer.html", "footer-container");
});
