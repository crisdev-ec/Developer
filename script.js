document.addEventListener("DOMContentLoaded", function () {
  // Mobile menu toggle
  const mobileMenuToggle = document.querySelector(".mobile-menu-toggle");
  const mainNav = document.querySelector(".main-nav");

  mobileMenuToggle.addEventListener("click", function () {
    mainNav.classList.toggle("active");
    this.querySelector("i").classList.toggle("fa-bars");
    this.querySelector("i").classList.toggle("fa-times");
  });

  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      if (targetId === "#") return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        // Close mobile menu if open
        if (mainNav.classList.contains("active")) {
          mainNav.classList.remove("active");
          mobileMenuToggle.querySelector("i").classList.remove("fa-times");
          mobileMenuToggle.querySelector("i").classList.add("fa-bars");
        }

        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: "smooth",
        });
      }
    });
  });

  // FAQ accordion functionality
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((item) => {
    const question = item.querySelector(".faq-question");

    question.addEventListener("click", () => {
      // Close all other items
      faqItems.forEach((otherItem) => {
        if (otherItem !== item && otherItem.classList.contains("active")) {
          otherItem.classList.remove("active");
        }
      });

      // Toggle current item
      item.classList.toggle("active");
    });
  });

  // Scroll reveal animation
  const scrollReveal = function () {
    const elements = document.querySelectorAll(".reveal-on-scroll");

    elements.forEach((element) => {
      const elementPosition = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (elementPosition < windowHeight - 100) {
        const delay = element.getAttribute("data-delay") || 0;

        setTimeout(() => {
          element.classList.add("visible");
        }, delay);
      }
    });
  };

  // Run on initial load
  scrollReveal();

  // Run on scroll
  window.addEventListener("scroll", scrollReveal);

  // Header scroll effect
  const header = document.getElementById("header");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 100) {
      header.style.backgroundColor = "rgba(36, 39, 58, 0.95)";
      header.style.boxShadow = "0 5px 20px rgba(0, 0, 0, 0.1)";
    } else {
      header.style.backgroundColor = "rgba(36, 39, 58, 0.9)";
      header.style.boxShadow = "none";
    }
  });

  // Form submission
  const forms = document.querySelectorAll("form");

  forms.forEach((form) => {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      // Here you would typically send the form data to a server
      // For now, we'll just show an alert
      alert("¡Gracias por tu mensaje! Me pondré en contacto contigo pronto.");
      form.reset();
    });
  });

  // Texto rotatorio para el título
  const rotatingText = () => {
    const rotatingTextElement = document.querySelector(".rotating-text");
    if (!rotatingTextElement) return;

    const rotatingParts = [
      "Transformo Negocios",
      "Transformo Marcas",
      "Transformo Empresas",
    ];
    let currentIndex = 0;

    // Función para actualizar el título
    const updateTitle = () => {
      // Efecto de fade out
      rotatingTextElement.classList.add("changing");

      // Después de la transición de fade out, cambiar el texto y hacer fade in
      setTimeout(() => {
        rotatingTextElement.textContent = rotatingParts[currentIndex];
        rotatingTextElement.classList.remove("changing");

        // Actualizar el índice para el próximo texto
        currentIndex = (currentIndex + 1) % rotatingParts.length;
      }, 500);
    };

    // Actualizar inmediatamente y luego cada 3 segundos
    updateTitle();
    setInterval(updateTitle, 3000);
  };

  // Llamar a la función cuando el DOM esté listo
  rotatingText();
});
