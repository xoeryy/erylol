let originalTitle = document.title;
let titleInterval;

function animateTitle() {
  let step = 0;
  const animationSteps = [
    `${originalTitle} *`,
    `* ${originalTitle}`,
    `* ${originalTitle} *`,
    `${originalTitle} * *`,
    `* * ${originalTitle}`,
    `${originalTitle} `
  ];

  titleInterval = setInterval(() => {
    document.title = animationSteps[step];
    step = (step + 1) % animationSteps.length;
  }, 500);
}

document.addEventListener("visibilitychange", function () {
  if (document.hidden) {
    document.title = "why did you click off?";
    clearInterval(titleInterval);
  } else {
    document.title = originalTitle;
    animateTitle();
  }
});

animateTitle();
