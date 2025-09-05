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

const btnTelecharger = document.querySelector("#about button");
btnTelecharger.addEventListener("click", () => {
  const link = document.createElement("a");
  link.href = "./assets/docCv/CvPrudencev0Vf.zip";
  link.download = "CvPrudence.zip"; // nom du fichier téléchargé
  link.click();
});

//<input type="button" value="Télécharger" onclick="window.location='http://......./fichier.zip';">
//fonction qui prmet d mttre une classe dynamiquement sur ls élémnts en fonction du scroll

// window.addEventListener("scroll", function () {
//   const links = document.querySelectorAll("nav ul li a");
//   const scroll = window.scrollY;
// console.log("position du scroll", scroll);

// Retire la classe active de tous les liens
//    links.forEach((l) => l.classList.remove("active"));

//   if (scroll < 820) {
//     document.getElementById("home").classList.add("active");
//   } else if (scroll < 1790) {
//     document.getElementById("about").classList.add("active");
//   } else if (scroll < 2593) {
//    document.getElementById("skills").classList.add("active");
//   } else if (scroll < 4140){
//     document.getElementById("projects").classList.add("active");
//   }else {
//     document.getElementById("contact").classList.add("active");
//   }
// });
// On définit plusieurs "étapes" (step0, step1, step2, step3) dans le CSS.

window.addEventListener("scroll", function () {
  const links = document.querySelectorAll("nav ul li a");
  const scroll = window.scrollY;

  // Retire la classe active de tous les liens
  links.forEach((l) => l.classList.remove("active"));

  // Pour chaque lien, vérifier la position de la section correspondante
  links.forEach((link) => {
    const sectionId = link.getAttribute("href").substring(1); // enlève le "#"
    const section = document.getElementById(sectionId);
    if (scroll == 0) {
      document.getElementById("accueil").classList.add("active");
    }

    if (section) {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      // Si le scroll est à l'intérieur de la section
      if (
        scroll >= sectionTop - 50 &&
        scroll < sectionTop + sectionHeight - 50
      ) {
        link.classList.add("active");
      }
    }
  });
});
