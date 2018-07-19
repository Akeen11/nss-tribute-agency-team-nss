const htmlData = {}

htmlData.execSummary = []
htmlData.career = []
htmlData.newsFeed = []
htmlData.Personal = []

let testData = 'Presenting Life Lessons with Lil Dicky. Event open to all ages. Doors open: 7pm, Show begins: 8pm. Special performances by Mustard and Oliver Tree';


htmlData.career.push(testData);


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

saveDatabase(htmlData.career, "test" );


loadDatabase("test");

const dumbLoop = function (abc){
    for (i=2; i<=abc.length-3; i++){
       let dumb = document.getElementById("example");
        dumb.innerHTML+= abc[i];
    }
}
dumbLoop(localStorage.test)
// console.log(localStorage.test);
// console.log(Object.values(localStorage.test));
// // console.log(JSON.stringify(abcdefg))
// document.getElementById("example").innerHTML = localStorage.test[2];

// localStorage.setItem("example", "Presenting Life Lessons with Lil Dicky. Event open to all ages. Doors open: 7pm, Show begins: 8pm. Special performances by Mustard and Oliver Tree")

// document.getElementById("example").innerHTML = localStorage.getItem("example");































