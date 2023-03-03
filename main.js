const pocetnaButton = document.getElementById("home-btn");
const pocetnaSection = document.getElementById("opis");
pocetnaButton.addEventListener("click", function () {
  pocetnaSection.scrollIntoView();
});
//
const opisButton = document.getElementById("kurs");
const opisSection = document.getElementById("kursevi");
opisButton.addEventListener("click", function () {
  opisSection.scrollIntoView();
});
//
const sufaraButton = document.getElementById("sufara-btn");
const sufaraSection = document.getElementById("harfovi-section");
sufaraButton.addEventListener("click", function () {
  sufaraSection.scrollIntoView();
});
//
const aboutButton = document.getElementById("about");
const aboutSection = document.getElementById("about-text");
aboutButton.addEventListener("click", function () {
  aboutSection.scrollIntoView();
});
//
const contactButton = document.getElementById("contact");
const contactSection = document.getElementById("telephone");
contactButton.addEventListener("click", function () {
  contactSection.scrollIntoView();
});
//

const elifButton = getElementById("alef");
const elifAudio = getElementById("alefsound");
elifAudio.addEventListener("click", function () {
  elifAudio.playSoUND;
});
