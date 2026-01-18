document.addEventListener("DOMContentLoaded", () => {

  const sections = document.querySelectorAll(".animate-on-scroll");
  if (sections.length === 0) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-active");
          observer.unobserve(entry.target); // bir kez çalışsın
        }
      });
    },
    {
      threshold: 0.2,                 // biraz daha geç tetiklensin
      rootMargin: "0px 0px -90px 0px"
    }
  );

  sections.forEach(section => observer.observe(section));

});