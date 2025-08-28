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
