// js/componentLoader.js
async function loadComponent(url, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  // Detectar si estamos dentro de /pages
  const basePath = window.location.pathname.includes("/pages/")
    ? "../"  // subir un nivel
    : "./";  // mismo nivel si estamos en index.html

  try {
    const response = await fetch(basePath + url);
    if (!response.ok) throw new Error(`Error al cargar ${url}`);

    const html = await response.text();
    container.outerHTML = html;

    console.log(`✅ Componente cargado correctamente: ${url}`);

    if (url.includes("header.html")) {
      document.dispatchEvent(new Event("headerLoaded"));
    } else if (url.includes("footer.html")) {
      document.dispatchEvent(new Event("footerLoaded"));
    }
  } catch (error) {
    console.error("❌ Error cargando componente:", error);
  }
}

document.addEventListener("DOMContentLoaded", async () => {
  await loadComponent("components/header.html", "header-container");
  await loadComponent("components/footer.html", "footer-container");
});
