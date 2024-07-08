export const scrollToTop = () => {
  window.scrollTo(0, 0);
};

export const checkScrollPosition = (ref, setAtStart, setAtEnd) => {
  setAtStart(ref.current.scrollLeft === 0);

  setAtEnd(
    Math.ceil(ref.current.scrollLeft + 1 + ref.current.clientWidth) >=
      ref.current.scrollWidth
  );
};

export const smoothScroll = (direction, ref, dura, scrollDistance) => {
  const start = ref.current.scrollLeft;

  const maxScrollLeft = ref.current.scrollWidth - ref.current.clientWidth;
  let distance = direction === "left" ? -scrollDistance : scrollDistance;

  if (direction === "left" && start + distance < 0) {
    distance = -start;
  } else if (direction === "right" && start + distance > maxScrollLeft) {
    distance = maxScrollLeft - start;
  }

  const duration = dura || 100; // duration in ms
  const startTime = performance.now();

  const scroll = (currentTime) => {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);

    const ease = (t) => t * (2 - t); // easeInOutQuad easing function
    ref.current.scrollLeft = start + distance * ease(progress);

    if (elapsed < duration) {
      requestAnimationFrame(scroll);
    }
  };

  requestAnimationFrame(scroll);
};
