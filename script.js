const links = document.querySelectorAll("nav ul li a");
console.log(links);
links.forEach((link) => {
  link.addEventListener("click", () => {
    // Retire la classe 'active' de tous les liens
    links.forEach((l) => l.classList.remove("active"));
    // Ajoute la classe 'active' au lien cliqué
    link.classList.add("active");
  });
});

// window.addEventListener('scroll', function() {
//   const menu = document.getElementById('menu');
//   const scroll = window.scrollY;

// On nettoie d'abord les classes
//   menu.classList.remove('step0', 'step1', 'step2', 'step3');

//   if (scroll < 100) {
//     menu.classList.add('step0');
//   } else if (scroll < 300) {
//     menu.classList.add('step1');
//   } else if (scroll < 600) {
//     menu.classList.add('step2');
//   } else {
//     menu.classList.add('step3');
//   }
// });
// On définit plusieurs "étapes" (step0, step1, step2, step3) dans le CSS.
