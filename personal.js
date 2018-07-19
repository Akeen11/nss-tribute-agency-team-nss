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

const savebase = function (databaseObject, localStorageKey) {
  const stringifiedDatabase = JSON.stringify(databaseObject)
  localStorage.setItem(localStorageKey, stringifiedDatabase)

}

savebase(lilDickyInfoDatabase, "Personal")


//Loading the Database

const loadbase = function (localStorageKey) {

  const databaseString = localStorage.getItem(localStorageKey)

  return JSON.parse(databaseString)
}

const LilDicPers = loadbase("Personal")
console.log(LilDicPers);

const birthDate = document.createElement("p")
birthDate.innerHTML = lilDickyInfoDatabase.Personal.Birthdate
const container = document.getElementById("Personal")
container.appendChild(birthDate);

