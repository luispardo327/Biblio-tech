// componentLoader.js

async function loadComponent(url, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`Error al cargar ${url}`);

    const html = await response.text();
    container.outerHTML = html;

    console.log(`✅ Componente cargado correctamente: ${url}`);

    // Lanzar eventos personalizados cuando los componentes estén listos
    if (url.includes("header.html")) {
      document.dispatchEvent(new Event("headerLoaded"));
    } else if (url.includes("footer.html")) {
      document.dispatchEvent(new Event("footerLoaded"));
    }

  } catch (error) {
    console.error("❌ Error cargando componente:", error);
  }
}

// Esperamos a que el documento base esté listo
document.addEventListener("DOMContentLoaded", async () => {
  await loadComponent("./components/header.html", "header-container");
  await loadComponent("./components/footer.html", "footer-container");
});
