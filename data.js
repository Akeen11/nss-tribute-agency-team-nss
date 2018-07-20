const htmlData = {}

htmlData.execSummary = []
htmlData.career = []
htmlData.newsFeed = []
htmlData.Personal = []

let careerInfo =  "Lil Dicky is a comedian rapper hailing from an upper middle class neighborhood in Philidelphia. He has released one mixtape, one studio album, one e.p., and five singles. Lil Dicky began his career in 2011 and would release his finished mixtape in 2013. Lil Dicky first gained wide-spread fame with the release of the music video for his song 'Ex-Boyfriend'.";


htmlData.career.push(careerInfo);


const saveDatabase = function (databaseObject, localStorageKey) {
    /*
        Convert the Object into a string.
    */
    const stringifiedDatabase = JSON.stringify(databaseObject)

    /*
        Create a key in local storage, and store the string
        version of your inventory database as the value
    */
    localStorage.setItem(localStorageKey, stringifiedDatabase)
}

const loadDatabase = function (localStorageKey) {
    // Get the string version of the database
    const databaseString = localStorage.getItem(localStorageKey)

    // Use JSON.parse() to convert the string back into an object
    return JSON.parse(databaseString)
}

saveDatabase(htmlData.career, "careerinfo" );

loadDatabase("careerinfo");

const dumbLoop = function (abc, cab){
    for (i=2; i<=abc.length-3; i++){
       let dumb = document.getElementById(cab);
        dumb.innerHTML+= abc[i];
    }
}
dumbLoop(localStorage.careerinfo, "doesItWork")
// console.log(localStorage.test);
// console.log(Object.values(localStorage.test));
// // console.log(JSON.stringify(abcdefg))
// document.getElementById("example").innerHTML = localStorage.test[2];

// localStorage.setItem("example", "Presenting Life Lessons with Lil Dicky. Event open to all ages. Doors open: 7pm, Show begins: 8pm. Special performances by Mustard and Oliver Tree")

// document.getElementById("example").innerHTML = localStorage.getItem("example");































