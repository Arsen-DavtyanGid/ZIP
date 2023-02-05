{
  const nav = document.querySelector("nav");
  let lastScrollY = window.scrollY + 200;

  window.addEventListener("scroll", () => {
    if (lastScrollY < window.scrollY) {
      nav.classList.add("nav--hidden");
    } else {
      nav.classList.remove("nav--hidden");
    }
  });
}
