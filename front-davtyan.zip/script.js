{
  const nav = document.querySelector("nav");
  let lastScrollY = window.scrollY;
  console.log(lastScrollY);
  window.addEventListener("scroll", () => {
    if (lastScrollY < window.scrollY) {
      nav.classList.add("nav--hidden");
    } else {
      nav.classList.remove("nav--hidden");
    }

    lastScrollY = window.scrollY;
  });
}
