const execSummary = {}

execSummary.title = []
execSummary.name = []
execSummary.country = []
execSummary.knownAliases = []
execSummary.kAOne = []
execSummary.kATwo = []
execSummary.kAThree = []
execSummary.kAFour = []
execSummary.knownCollaborators = []

let title =  "Executive Summary";
let name =  "Lil'Dicky";
let country =  "United States of America";
let knownAliases =  "Known Aliases";
let kAOne =  "Lil Dicky";
let kATwo =  "LD";
let kAThree =  "Brain";
let kAFour =  "David Andrew Burd";
let knownCollaborators =  "Known Collaborators";


execSummary.title.push(title);
execSummary.name.push(name);
execSummary.country.push(country);
execSummary.knownAliases.push(knownAliases);
execSummary.kAOne.push(kAOne);
execSummary.kATwo.push(kATwo);
execSummary.kAThree.push(kAThree);
execSummary.kAFour.push(kAFour);
execSummary.knownCollaborators.push(knownCollaborators);


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

saveDatabase(execSummary.title, "title" );
saveDatabase(execSummary.name, "name" );
saveDatabase(execSummary.country, "country" );
saveDatabase(execSummary.knownAliases, "knownAliases" );
saveDatabase(execSummary.kAOne, "kAOne" );
saveDatabase(execSummary.kATwo, "kATwo" );
saveDatabase(execSummary.kAThree, "kAThree" );
saveDatabase(execSummary.kAFour, "kAFour" );
saveDatabase(execSummary.knownCollaborators, "knownCollaborators" );


loadDatabase("title");
loadDatabase("name");
loadDatabase("country");
loadDatabase("knownAliases");
loadDatabase("kAOne");
loadDatabase("kATwo");
loadDatabase("kAThree");
loadDatabase("kAFour");
loadDatabase("knownCollaborators");

const execLoop = function (dataPoint, id){
    for (i=2; i<=dataPoint.length-3; i++){
       let dumb = document.getElementById(id);
        dumb.innerHTML+= dataPoint[i];
    }
}
execLoop(localStorage.title, "title")
execLoop(localStorage.name, "name")
execLoop(localStorage.country, "country")
execLoop(localStorage.knownAliases, "knownAliases")
execLoop(localStorage.kAOne, "kAOne")
execLoop(localStorage.kATwo, "kATwo")
execLoop(localStorage.kAThree, "kAThree")
execLoop(localStorage.kAFour, "kAFour")
execLoop(localStorage.knownCollaborators, "knownCollaborators")