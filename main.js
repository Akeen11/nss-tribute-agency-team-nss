//document.getElementById("birds").onmouseover = function() {mouseOver()};

//function mouseOver(){

//}
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("execSlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

//Testing Ground//

const lilDickyInfoDatabase = {}

lilDickyInfoDatabase.Personal = {
  Title: "Personal",
  Name: "Name: David Andrew Burd",
  Birthdate: "Born: March 15, 1988",
  Relationship: "Relationship Status: Not Married",
  From: "From: Philadelphia, Pennsylvania",
  Current: "Currently: Los Angeles, California"
}

const saveDatabase = function (databaseObject, localStorageKey) {
  const stringifiedDatabase = JSON.stringify(databaseObject)
  localStorage.setItem(localStorageKey, stringifiedDatabase)

}

saveDatabase(lilDickyInfoDatabase, "Personal")


//Loading the Database

const loadDatabase = function (localStorageKey) {

  const databaseString = localStorage.getItem(localStorageKey)

  return JSON.parse(databaseString)
}

const LilDicPers = loadDatabase("Personal")
console.log(LilDicPers);

const birthDate = document.createElement("p")
birthDate.innerHTML = lilDickyInfoDatabase.Personal.Birthdate
const container = document.getElementById("Personal")
container.appendChild(birthDate);