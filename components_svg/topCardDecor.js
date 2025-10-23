document.addEventListener("DOMContentLoaded", (event) => {
  const navDecor = document.querySelectorAll("#card-decor-top");

  navDecor.forEach((e) => {
    e.innerHTML = `<svg width="" height="" viewBox="0 0 440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M440 59.873H324C321.275 59.873 312.5 59.873 308 59.873H287C284.5 59.873 281.015 59.873 278.29 59.873H0L0 47.873L0 42C0 35.3726 5.37256 30 12 30H66.5291C69.7117 30 72.7639 28.7357 75.0144 26.4853L97.985 3.51472C100.235 1.26428 103.288 0 106.47 0H329.529C332.712 0 335.764 1.26428 338.014 3.51472L360.985 26.4853C363.235 28.7357 366.288 30 369.47 30H428C434.627 30 440 35.3726 440 42L440 47.873L440 59.873Z" fill="#162127"/>
</svg>

	


`;
  });
});
