window.addEventListener("load", () => {

  const scroller = window;
  const windowBox = document.querySelector(".reveal-window");
  const img = windowBox?.querySelector("img");

  if (!windowBox || !img) {
    console.log("Eleman bulunamad");
    return;
  }

  function onScroll() {
    const box = windowBox.getBoundingClientRect();

    const viewportHeight = window.innerHeight;

    const progress = Math.min(
      1,
      Math.max(
        0,
        (viewportHeight - box.top) / (viewportHeight + box.height)
      )
    );

    const move = progress * (520 - 200);

    img.style.transform = `translateY(${move}px)`;
  }

  scroller.addEventListener("scroll", onScroll);

  onScroll();
});