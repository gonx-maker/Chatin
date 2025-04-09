
// Animación al hacer scroll (fade in)
document.addEventListener("DOMContentLoaded", () => {
  const posts = document.querySelectorAll(".post");

  const showOnScroll = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    {
      threshold: 0.1
    }
  );

  posts.forEach(post => {
    post.classList.add("hidden");
    showOnScroll.observe(post);
  });
});

// Scroll suave al hacer clic en enlaces internos
document.querySelectorAll('a[href^="#"]').forEach(enlace => {
  enlace.addEventListener("click", function (e) {
    e.preventDefault();
    const destino = document.querySelector(this.getAttribute("href"));
    if (destino) {
      destino.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Efecto en el título del blog al pasar el mouse
const titulo = document.querySelector("header h1");
titulo.addEventListener("mouseover", () => {
  titulo.style.transform = "scale(1.05)";
  titulo.style.color = "#ff9800";
});
titulo.addEventListener("mouseout", () => {
  titulo.style.transform = "scale(1)";
  titulo.style.color = "";
});
