const htmlData = {}

htmlData.execSummary = []
htmlData.career = []
htmlData.newsFeed = []
htmlData.Personal = []

let testData =  "Executive Summary";


htmlData.career.push(testData);


const saveDatabaseExec = function (databaseObject, localStorageKey) {

    const stringifiedDatabase = JSON.stringify(databaseObject)

    localStorage.setItem(localStorageKey, stringifiedDatabase)
}

const loadDatabaseExec = function (localStorageKey) {

    const databaseString = localStorage.getItem(localStorageKey)

    return JSON.parse(databaseString)
}

saveDatabaseExec(htmlData.career, "test" );


loadDatabaseExec("test");

const execLoop = function (exec){
    for (i=2; i<=exec.length-3; i++){
       let dumb = document.getElementById("title");
        dumb.innerHTML+= exec[i];
    }
}
execLoop(localStorage.test)