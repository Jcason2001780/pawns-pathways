function reveal() {
  var reveals = document.querySelectorAll(".reveal");
  for (var i = 0; i < reveals.length; i++) {
    var rect = reveals[i];
    const elementIsVisibleInViewport = (el, partiallyVisible = false) => {
      const { top, left, bottom, right } = el.getBoundingClientRect();
      const { innerHeight, innerWidth } = window;
      return partiallyVisible
        ? (top > 0 && top < innerHeight) || (bottom > 0 && bottom < innerHeight)
        : top >= 0 && bottom <= innerHeight;
    };
    if (elementIsVisibleInViewport(rect, true)) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}
window.addEventListener("scroll", reveal);

reveal();
