document.addEventListener("DOMContentLoaded", (event) => {
  const navDecor = document.querySelectorAll("#nav-card-decor");

  navDecor.forEach((e) => {
    e.innerHTML = `<svg width="" height="" viewBox="0 0 325 35" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_39_980)">
<path d="M325 0V23C325 29.6274 319.627 35 313 35H258.353C256.16 35 254.008 34.399 252.133 33.2624L224.867 16.7376C222.992 15.601 220.84 15 218.647 15H107.353C105.16 15 103.008 15.601 101.133 16.7376L73.8671 33.2624C71.9916 34.399 69.8405 35 67.6475 35H12C5.37258 35 0 29.6274 0 23V0H325Z" fill="#162127"/>
</g>
<defs>
<clipPath id="clip0_39_980">
<rect width="325" height="35" fill="white"/>
</clipPath>
</defs>
</svg>
	


`;
  });
});
