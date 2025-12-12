// js/componentLoader.js

async function loadComponent(url, containerId) {
   const container = document.getElementById(containerId);
    if (!container) return;

   try {
   // 1. Realiza la solicitud (fetch) a la URL.
  const response = await fetch(url);
  if (!response.ok) throw new Error(`Error al cargar ${url}`);

    const html = await response.text();
  // 2. Inyecta el contenido HTML en el contenedor (header-container o footer-container).
   container.outerHTML = html;

    console.log(`✅ Componente cargado correctamente: ${url}`);
  // 3. Dispara un evento si el header/footer terminó de cargar.
   if (url.includes("header.html")) {
  document.dispatchEvent(new Event("headerLoaded"));
    // Este evento le indica al search.js que puede iniciar.
   } else if (url.includes("footer.html")) {
   document.dispatchEvent(new Event("footerLoaded"));
   }  
   } catch (error) { // 👈 SINTAXIS CORREGIDA: 'catch' justo después de la llave de cierre de 'try'
     }
}

document.addEventListener("DOMContentLoaded", async () => {
 // LLAMADA CORREGIDA: Subir a la raíz (../) y entrar a components/
   await loadComponent("../components/header.html", "header-container");
   await loadComponent("../components/footer.html", "footer-container");
});