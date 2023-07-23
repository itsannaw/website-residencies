export function smoothScroll(e, id) {
  e.preventDefault();
  document.querySelector(id).scrollIntoView({
    behavior: "smooth",
  });
}
