// script.js

document.addEventListener("DOMContentLoaded", () => {
    const modoBtn = document.getElementById("modoBtn");
    const body = document.body;
  
    // Verificamos si el usuario ya tiene preferencia guardada
    const modoGuardado = localStorage.getItem("modo");
  
    if (modoGuardado === "noche") {
      body.classList.add("noche");
    }
  
    modoBtn.addEventListener("click", () => {
      body.classList.toggle("noche");
  
      // Guardamos el modo actual en el localStorage
      if (body.classList.contains("noche")) {
        localStorage.setItem("modo", "noche");
      } else {
        localStorage.setItem("modo", "dia");
      }
    });
  });
  