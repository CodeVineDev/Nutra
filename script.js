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