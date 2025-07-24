document.addEventListener("DOMContentLoaded", () => {
  let e = document.getElementById("hamburger"),
    t = document.getElementById("mobileMenu"),
    n = document.querySelector(".equals"),
    r = document.querySelector(".times");
  e &&
    t &&
    n &&
    r &&
    e.addEventListener("click", () => {
      t.classList.toggle("open");
      let e = t.classList.contains("open");
      (n.style.display = e ? "none" : "block"),
        (r.style.display = e ? "block" : "none");
    });
})
  const fadeEls = document.querySelectorAll('.fade-in');

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // Optional: remove to animate only once
      }
    });
  }, {
    threshold: 0.1
  });

  fadeEls.forEach(el => observer.observe(el));
