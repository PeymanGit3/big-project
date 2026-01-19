document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".fa-bars");

  const mobileNav = document.createElement("div");
  mobileNav.className = "mobile-nav";

  mobileNav.innerHTML = `
    <ul>
      <li><a href="#">HOME</a></li>
      <li><a href="#">SHOP</a></li>
      <li><a href="#">APRENDE Y CREA</a></li>
      <li><a href="#">VISÍTANOS</a></li>
      <li><a href="#">QUIÉNES SOMOS</a></li>
      <li><a href="#">CONTACTO</a></li>
    </ul>
  `;

  document.body.appendChild(mobileNav);

  let isOpen = false;

  hamburger.addEventListener("click", () => {
    isOpen = !isOpen;

    mobileNav.classList.toggle("open");

    if (isOpen) {
      hamburger.classList.remove("fa-bars");
      hamburger.classList.add("fa-xmark");
    } else {
      hamburger.classList.remove("fa-xmark");
      hamburger.classList.add("fa-bars");
    }
  });
});

mobileNav.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    mobileNav.classList.remove("open");
    hamburger.classList.remove("fa-xmark");
    hamburger.classList.add("fa-bars");
    isOpen = false;
  });
});