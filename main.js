
// Load execSummary
function load_execSummary() {
    document.getElementById("execSummary").innerHTML='<object type="text/html" data="execSummaryContent.html" style="width: 100%"></object>';
    
}

load_execSummary()



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

