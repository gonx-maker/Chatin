// 🧠 Mensaje de bienvenida
console.log("🌟 Hola, bienvenid@ al Blog de Chatin");

// ✨ Frases estilo IA
const frasesInspiradoras = [
  "Crea, aunque nadie entienda tu arte.",
  "La locura es solo una perspectiva de libertad.",
  "La inspiración no se busca, se provoca.",
  "Sos una obra en progreso y eso está bien.",
  "Hoy puede ser el día que cambie todo."
];

// Mostrar frase inspiradora al cargar
window.addEventListener("load", () => {
  const mensaje = frasesInspiradoras[Math.floor(Math.random() * frasesInspiradoras.length)];
  const banner = document.createElement("div");
  banner.textContent = `🤖 Chatin dice: “${mensaje}”`;

  Object.assign(banner.style, {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    background: "#444",
    color: "white",
    padding: "10px 15px",
    borderRadius: "12px",
    fontFamily: "sans-serif",
    fontSize: "0.9rem",
    boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
    zIndex: "999",
    opacity: "0",
    transition: "opacity 1s ease-in-out"
  });

  document.body.appendChild(banner);
  setTimeout(() => {
    banner.style.opacity = "1";
  }, 100);
  setTimeout(() => {
    banner.style.opacity = "0";
    setTimeout(() => banner.remove(), 1000);
  }, 9000);
});


}

// 🌈 Scroll suave para anclas internas
document.querySelectorAll('a[href^="#"]').forEach(enlace => {
  enlace.addEventListener('click', function (e) {
    e.preventDefault();
    const destino = document.querySelector(this.getAttribute('href'));
    if (destino) {
      destino.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// 📥 Mensaje al descargar archivos
document.querySelectorAll('a[href$=".pdf"], a[href$=".doc"]').forEach(link => {
  link.addEventListener('click', () => {
    alert("Gracias por descargar desde la Biblioteca Chatin 🙌");
  });
});

// 🕓 Año automático en el footer
const footer = document.querySelector("footer p");
if (footer) {
  const year = new Date().getFullYear();
  footer.innerHTML = `&copy; ${year} Blog de Chatin - CHTX`;
}

// 💫 Animación al hacer scroll (sin CSS externo)
const elementos = document.querySelectorAll('.post, section');

const mostrarElemento = (entrada) => {
  entrada.forEach(e => {
    if (e.isIntersecting) {
      e.target.style.opacity = "1";
      e.target.style.transform = "translateY(0)";
    }
  });
};

const observer = new IntersectionObserver(mostrarElemento, {
  threshold: 0.2
});

elementos.forEach(el => {
  el.style.opacity = "0";
  el.style.transform = "translateY(20px)";
  el.style.transition = "all 0.8s ease-in-out";
  observer.observe(el);
});
