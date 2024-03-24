const handleButtonClick = (buttons, direction) => {
  buttons.forEach((button, index) =>
    button.addEventListener("click", () => {
      const nextSlide =
        direction === "next" ? slides[index + 1] : slides[index - 1];
      if (nextSlide) {
        slides[index].classList.add("hidden");
        nextSlide.classList.remove("hidden");
      }
    })
  );
};

const handleStepClick = (steps) => {
  steps.forEach((step, index) => {
    if (step.classList.length === 1) {
      step.addEventListener("click", () => {
        slides.forEach((slide) => slide.classList.add("hidden"));
        slides[index].classList.remove("hidden");
      });
    }
  });
};

const slides = document.querySelectorAll(".slider");
const nextButtons = [...slides].map((slide) =>
  slide.querySelector(".slider__next-button")
);
const prevButtons = [...slides].map((slide) =>
  slide.querySelector(".slider__previous-button")
);
const stepsContainerList = [...slides].map((slide) =>
  slide.querySelector(".steps")
);

handleButtonClick(nextButtons, "next");
handleButtonClick(prevButtons, "prev");

stepsContainerList.forEach((stepsContainer) => {
  handleStepClick([...stepsContainer.children]);
});
