
// Load execSummary
function load_execSummary() {
    document.getElementById("execSummary").innerHTML='<object type="text/html" data="execSummaryContent.html" style="width: 100%"></object>';
    
}

load_execSummary()



document.getElementById("birds").onmouseover = function() {mouseOver()};

function mouseOver(){

}

// function load_newsFeed() {
//     document.getElementById("news-feed").innerHTML='<object type="text/html" data="news-feed.html"></object>';
// }

// load_newsFeed()

var link = document.querySelector('link[rel="import"]');
    var content = link.import;

    // Grab DOM from warning.html's document.
    var el = content.querySelector('#news-feed');
    const feedDocumentLocation = document.querySelector('.location')

    feedDocumentLocation.appendChild(el.cloneNode(true));