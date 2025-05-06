function setupCarousel(carouselId, dotContainerId) {
  const carousel = document.getElementById(carouselId);
  const track = carousel.querySelector('.carousel-track');
  const slides = track.children;
  const dotContainer = document.getElementById(dotContainerId);
  let current = 0;
  let interval;

  const slideCount = slides.length;

  // Set width for track
  track.style.width = `${slideCount * 600}%`;

  // Create dots
  for (let i = 0; i < slideCount; i++) {
    const dot = document.createElement('span');
    if (i === 0) dot.classList.add('active');
    dot.addEventListener('click', () => goToSlide(i));
    dotContainer.appendChild(dot);
  }

  const dots = dotContainer.querySelectorAll('span');

  function goToSlide(index) {
    current = index;
    track.style.transform = `translateX(-${index * (11 / slideCount)}%)`;
    updateDots();
  }

  function updateDots() {
    dots.forEach((d, i) => {
      d.classList.toggle('active', i === current);
    });
  }

  function nextSlide() {
    current = (current + 1) % slideCount;
    goToSlide(current);
  }

  function startAuto() {
    interval = setInterval(nextSlide, 5000);
  }

  function stopAuto() {
    clearInterval(interval);
  }

  carousel.addEventListener('mouseenter', stopAuto);
  carousel.addEventListener('mouseleave', startAuto);

  startAuto();
}

// Initialize both carousels
document.addEventListener('DOMContentLoaded', () => {
  setupCarousel('carousel1', 'carousel1-dots');
  setupCarousel('carousel2', 'carousel2-dots');
});

const video = document.querySelector('#intro-video video');
video.addEventListener('ended', () => {
  document.getElementById('intro-video').style.display = 'none';
  document.getElementById('main-site').style.display = 'block';
});


