
// === Scroll Reveal ===
document.addEventListener("DOMContentLoaded", () => {
  const animatedElements = document.querySelectorAll(".reveal");

  const revealOnScroll = () => {
    const triggerBottom = window.innerHeight * 0.85;

    animatedElements.forEach(el => {
      const boxTop = el.getBoundingClientRect().top;

      if (boxTop < triggerBottom) {
        el.classList.add("opacity-100", "translate-y-0");
      } else {
        el.classList.remove("opacity-100", "translate-y-0");
      }
    });
  };

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll();
});

// === Smooth Toggle Menu ===
document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.querySelector(".menu-button");
  const mobileMenu = document.querySelector(".mobile-menu");

  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
      mobileMenu.classList.toggle("flex");
    });
  }
});

// === Scroll to Top Button ===
const scrollBtn = document.createElement("button");
scrollBtn.textContent = "↑";
scrollBtn.className = "fixed bottom-5 right-5 bg-black text-white p-3 rounded-full opacity-0 transition-all duration-300";
document.body.appendChild(scrollBtn);

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollBtn.classList.add("opacity-100");
  } else {
    scrollBtn.classList.remove("opacity-100");
  }
});

scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
