document.addEventListener("DOMContentLoaded", function () {
  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Asegúrate de que la animación se activa cuando el elemento esté en el medio del viewport
          const rect = entry.target.getBoundingClientRect();
          const viewportHeight = window.innerHeight;

          // Ajusta la lógica para que la animación se ejecute en la mitad del viewport
          if (
            rect.top < viewportHeight * 0.75 &&
            rect.bottom > viewportHeight * 0.25
          ) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target); // Deja de observar el elemento después de la primera animación
          }
        }
      });
    },
    { threshold: [0.25, 0.75] } // Asegura que el elemento se considere visible en un 25% - 75% de su altura
  );

  document
    .querySelectorAll(
      ".translate-up, .translate-left, .translate-right, .translate-down, .translate-from-top-to-down, .rotate360"
    )

    .forEach((element) => {
      observer.observe(element);
    });
});

// Menu logic
let linkPages = document.getElementById("linkPages");
let hamburguerIcon = document.getElementById("hamburguerIcon");
let closeIcon = document.getElementById("closeIcon");

function toggleHamburguerMenu() {
  linkPages.classList.toggle("hidden");
  hamburguerIcon.classList.toggle("hidden");
  closeIcon.classList.toggle("hidden");
}

// Prices tabs
function showPlan(plan) {
  let mensualPlan = document.getElementById("mensualPlan");
  let anualPlan = document.getElementById("anualPlan");
  let mensualTab = document.getElementById("mensualTab");
  let anualTab = document.getElementById("anualTab");

  if (plan === "mensual") {
    mensualPlan.classList.remove("hidden");
    anualPlan.classList.add("hidden");
    mensualTab.classList.add("bg-secondary-color");
    anualTab.classList.remove("bg-secondary-color");
    anualTab.classList.add("bg-[#D9D9D9]");
  } else if (plan === "anual") {
    mensualPlan.classList.add("hidden");
    anualPlan.classList.remove("hidden");
    mensualTab.classList.remove("bg-secondary-color");
    mensualTab.classList.add("bg-[#D9D9D9]");
    anualTab.classList.add("bg-secondary-color");
  }
}
