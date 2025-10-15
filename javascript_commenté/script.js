////////////////////////////////////
//// ✍️ Effet machine à écrire ////
///////////////////////////////////
const texteSlogan = "Destination CocoBeach 🌴"; // Le texte à afficher progressivement
let indexLettre = 0; // Index de la lettre actuelle (commence à 0)

// Fonction principale : écrit le texte lettre par lettre
function ecrireMachine() {
  if (indexLettre < texteSlogan.length) { // Tant qu'on n'a pas atteint la fin du texte
    // Sélectionne l'élément HTML avec l'id "slogan"
    // et ajoute la lettre correspondante à l'index actuel
    document.getElementById("slogan").textContent += texteSlogan.charAt(indexLettre);
    indexLettre++; // Passe à la lettre suivante
    // Relance la fonction après 100 millisecondes
    // → crée l'effet de frappe progressive
    setTimeout(ecrireMachine, 100);
  }
}

// Démarre l'effet dès l'ouverture de la page
ecrireMachine();



/////////////////////////////
// 🌓 Mode sombre / clair //
////////////////////////////
// 🌙 Fonction pour basculer entre le mode clair et le mode sombre
function basculerMode() {
  // Ajoute ou retire la classe "mode-sombre" sur l’élément <body>
  // → Si la classe n’est pas présente, elle est ajoutée (active le mode sombre)
  // → Si elle est déjà présente, elle est retirée (revient au mode clair)
  document.body.classList.toggle("mode-sombre");
}



///////////////////////////////////
// 🔍 Zoom au survol de l’image //
///////////////////////////////////
// Sélectionne l’élément HTML ayant l’ID "image-plage"
const imagePlage = document.getElementById("image-plage");

// Quand la souris entre sur l’image...
imagePlage.addEventListener("mouseenter", () => {
  // ...on applique une transformation CSS pour agrandir l’image (zoom à 150%)
  imagePlage.style.transform = "scale(1.5)";
});

// Quand la souris quitte l’image...
imagePlage.addEventListener("mouseleave", () => {
  // ...on remet la taille d’origine (zoom normal)
  imagePlage.style.transform = "scale(1)";
});



//////////////////////////////////////
// Apparition avec fade / slide //
//////////////////////////////////////
// Sélectionne l’élément HTML ayant l’ID "section-accueil"
const sectionAccueil = document.getElementById("section-accueil");

// Ajoute un écouteur d’événement sur le défilement (scroll) de la fenêtre
window.addEventListener("scroll", () => {

  // Récupère la position de la section par rapport à la fenêtre
  const position = sectionAccueil.getBoundingClientRect();

  // Si le haut de la section est à moins de 100px du bas de la fenêtre visible,
  // on considère qu’elle entre dans le champ de vision
  if (position.top < window.innerHeight - 100) {

    // Ajoute la classe "visible" à la section pour déclencher une animation CSS
    sectionAccueil.classList.add("visible");
  }
});



/////////////////////////////////
// Animation pomme en rotation //
/////////////////////////////////
// Sélectionne l’élément HTML dont l’id est "pomme"
const pomme = document.getElementById("pomme");

// Initialise l’angle de rotation à 0 degré
let angleRotation = 0;

// Définit la direction de rotation (1 = sens horaire, -1 = sens antihoraire)
let direction = 1;

// Crée une boucle qui s’exécute toutes les 50 millisecondes
setInterval(() => {
  // Incrémente ou décrémente l’angle de rotation selon la direction actuelle
  angleRotation += direction * 0.5;
  // Si la rotation dépasse +5° ou -5°, on inverse la direction
  if (angleRotation > 15 || angleRotation < -15) {
    direction *= -1;
  }
  // Applique la rotation calculée à l’élément "pomme" en CSS
  pomme.style.transform = `rotate(${angleRotation}deg)`;
}, 30);




