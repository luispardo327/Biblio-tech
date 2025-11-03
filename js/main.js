// main.js

// Espera hasta que el header haya sido cargado dinámicamente
document.addEventListener("headerLoaded", () => {
  console.log("✅ Header cargado. Iniciando scripts principales...");

  // ---- 1. Menú hamburguesa ----
  const menuToggle = document.getElementById("menu-toggle");
  const navElement = document.querySelector("nav");

  if (menuToggle && navElement) {
    menuToggle.addEventListener("click", () => {
      navElement.classList.toggle("active");

      const icon = menuToggle.querySelector("i");
      if (navElement.classList.contains("active")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-times");
      } else {
        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");
      }
    });
  }

// ---- 2. Dropdown “Cursos” con animación ----
const dropdownToggle = document.querySelector(".dropdown .dropbtn");

if (dropdownToggle) {
  dropdownToggle.addEventListener("click", (e) => {
    const parentDropdownLi = dropdownToggle.parentElement;

    // Si no está activo → lo abrimos sin navegar
    if (!parentDropdownLi.classList.contains("active")) {
      e.preventDefault();
      parentDropdownLi.classList.add("active");
    } else {
      // Si ya está activo → lo cerramos y permitimos la navegación
      parentDropdownLi.classList.remove("active");
    }
  });
}

  // ---- 3. Menú de accesibilidad ----
  const mainAccessibilityButton = document.getElementById("main-accessibility-button");
  const accessibilityOptions = document.getElementById("accessibility-options");
  const btnAumentarFuente = document.getElementById("btn-aumentar-fuente");
  const btnDisminuirFuente = document.getElementById("btn-disminuir-fuente");
  const btnAltoContraste = document.getElementById("btn-alto-contraste");
  const btnRestablecer = document.getElementById("btn-restablecer");
  const body = document.body;

  if (mainAccessibilityButton && accessibilityOptions) {
    mainAccessibilityButton.addEventListener("click", () => {
      accessibilityOptions.classList.toggle("hidden");
    });
  }

  if (btnAumentarFuente && btnDisminuirFuente) {
    btnAumentarFuente.addEventListener("click", () => {
      if (body.classList.contains("font-small")) {
        body.classList.replace("font-small", "font-large");
      } else if (body.classList.contains("font-large")) {
        body.classList.replace("font-large", "font-larger");
      } else {
        body.classList.add("font-large");
      }
    });

    btnDisminuirFuente.addEventListener("click", () => {
      if (body.classList.contains("font-larger")) {
        body.classList.replace("font-larger", "font-large");
      } else if (body.classList.contains("font-large")) {
        body.classList.replace("font-large", "font-small");
      } else {
        body.classList.add("font-small");
      }
    });
  }

  if (btnAltoContraste) {
    btnAltoContraste.addEventListener("click", () => {
      body.classList.toggle("high-contrast");
    });
  }

  if (btnRestablecer) {
    btnRestablecer.addEventListener("click", () => {
      body.classList.remove("font-small", "font-large", "font-larger", "high-contrast");
    });
  }
});
