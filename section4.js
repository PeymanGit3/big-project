document.addEventListener("DOMContentLoaded", () => {
  const section4 = document.querySelector(".section4");
  const animatedEls = section4.querySelectorAll(
    ".anim-pink, .anim-pink-text, .anim-blue-img, .anim-blue-text, .anim-big-photo"
  );

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animatedEls.forEach(el => {
            el.style.animationPlayState = "running";
          });
          observer.disconnect(); 
        }
      });
    },
    {
      threshold: 0.3  
    }
  );

  observer.observe(section4);
});