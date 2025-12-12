// js/componentLoader.js

async function loadComponent(url, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`Error al cargar ${url}`);

        const html = await response.text();
        container.innerHTML = html; 

        console.log("Cargado:", url);

        if (url.includes("header.html")) {
            document.dispatchEvent(new Event("headerLoaded"));
        }

        if (url.includes("footer.html")) {
            document.dispatchEvent(new Event("footerLoaded"));
        }

    } catch (e) {
        console.error("❌ Error:", e);
    }
}

document.addEventListener("DOMContentLoaded", async () => {
    await loadComponent("./components/header.html", "header-container");
    await loadComponent("./components/footer.html", "footer-container");
});
