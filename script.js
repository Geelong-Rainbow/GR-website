function randomizeCarouselScroll() {
  document.querySelectorAll('.carousel-image').forEach(image => {
      image.style.animationDelay = `${Math.random() * 100}%`;
  });
}

window.onload = randomizeCarouselScroll;