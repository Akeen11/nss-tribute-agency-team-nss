
// Load execSummary
function load_execSummary() {
    document.getElementById("execSummary").innerHTML='<object type="text/html" data="execSummaryContent.html" style="width: 100%"></object>';
    
}

load_execSummary()



// document.getElementById("birds").onmouseover = function() {mouseOver()};

// function mouseOver(){

// }


var link = document.querySelector('link[rel="import"]'),
content = link.import,

// // Grab DOM from warning.html's document.
el = content.querySelector('#news-feed');
const feedDocumentLocation = document.querySelector('.location')

feedDocumentLocation.appendChild(el.cloneNode(true));

localStorage.setItem("boom",document.querySelector('#news-feed').innerHTML);
document.querySelector('#news-feed').innerHTML = localStorage.getItem("boom")






