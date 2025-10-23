document.addEventListener("DOMContentLoaded", () => {
  // how it works section script
  const steps = document.querySelectorAll(".steps-card");
  let currentIndex = 0;

  function updateSteps() {
    steps.forEach((card, i) => {
      if (i === currentIndex) {
        card.classList.add("bg-[#162127]", "text-white");
        card.classList.remove("bg-white", "border-2", "border-[#162127]");
        card.querySelectorAll("div, h3, p").forEach((el) => el.classList.add("text-white"));
      } else {
        card.classList.remove("bg-[#162127]", "text-white");
        card.classList.add("bg-white", "border-2", "border-[#162127]");
        card.querySelectorAll("div, h3, p").forEach((el) => el.classList.remove("text-white"));
      }
    });

    currentIndex = (currentIndex + 1) % steps.length;
  }

  updateSteps();
  setInterval(updateSteps, 2000);
});
