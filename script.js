////////////////////////////////
// ✍️ Effet machine à écrire ///
////////////////////////////////
const texteSlogan = "Destination CocoBeach 🌴";
let indexLettre = 0;

function ecrireMachine() {
  if (indexLettre < texteSlogan.length) {
    document.getElementById("slogan").textContent += texteSlogan.charAt(indexLettre);
    indexLettre++;
    setTimeout(ecrireMachine, 100);
  }
}
ecrireMachine();

// Démarre l'effet dès l'ouverture de la page
ecrireMachine();


/////////////////////////////
// 🌓 Mode sombre / clair //
////////////////////////////
function basculerMode() {
  document.body.classList.toggle("mode-sombre");
}


///////////////////////////////////
// 🔍 Zoom au survol de l’image //
///////////////////////////////////
const imagePlage = document.getElementById("image-plage");

imagePlage.addEventListener("mouseenter", () => {
  imagePlage.style.transform = "scale(1.5)";
});

imagePlage.addEventListener("mouseleave", () => {
  imagePlage.style.transform = "scale(1)";
});

//////////////////////////////////////
// 👁️ Apparition avec fade / slide //
//////////////////////////////////////
const sectionAccueil = document.getElementById("section-accueil");
window.addEventListener("scroll", () => {
  const position = sectionAccueil.getBoundingClientRect();
  if (position.top < window.innerHeight - 100) {
    sectionAccueil.classList.add("visible");
  }
});


/////////////////////////////////////
// Animation pomme en rotation //
/////////////////////////////////////
const pomme = document.getElementById("pomme");
let angleRotation = 0;
let direction = 1;

setInterval(() => {
  angleRotation += direction * 0.5;
  if (angleRotation > 5 || angleRotation < -5) {
    direction *= -1;
  }
  pomme.style.transform = `rotate(${angleRotation}deg)`;
}, 50);

