//Testing Ground//

//const lilDickyInfoDatabase = {}

let Personal = {  
  
  lilDicky: {
  
  Photo: "images/bird_img.jpg",
  Title: "Personal Information",
  Name: "Name: David Andrew Burd",
  Birthdate: "Born: March 15, 1988",
  Relationship: "Relationship Status: Not Married",
  From: "From: Philadelphia, Pennsylvania",
  Current: "Currently: Los Angeles, California"
},




  famMembers: [

 {
  Photo: "images/patty_img.jpg",
  Title: "Mom" ,
  Name: "Patty Lovelace"

},

{
  
  Photo: "images/jackson_img.jpg",
  Title: "Dad" ,
  Name: "Alan Jackson"

},

{
  Photo: "images/Labradoodle.jpg",
  Title: "Dog-Child" ,
  Name: "Lil Ricky"
}
]
}

const savebase = function (databaseObject, localStorageKey) {
  const stringifiedDatabase = JSON.stringify(databaseObject)
  localStorage.setItem(localStorageKey, stringifiedDatabase)

}


savebase(Personal, "Personal")


//Loading the Database

const loadbase = function (localStorageKey) {

  const databaseString = localStorage.getItem(localStorageKey)

  return JSON.parse(databaseString)
}

const LilDicPers = loadbase("Personal")
console.log(LilDicPers);

let paragraph = document.getElementById("Personal_Content")

// const paragraph = document.createElement("div")
paragraph.innerHTML += `<div class="media">
<img class="align-self-center mr-3" src="${Personal.lilDicky.Photo}" alt="${Personal.lilDicky.Name}" >
<div class="media-body">
<h2 class="mt-0">${Personal.lilDicky.Name}</h2>
<h4>${Personal.lilDicky.Birthdate}</h4>
<p>${Personal.lilDicky.Relationship}</p>
<p><a href="https://earth.google.com/web/@40.06251244,-75.12391707,52.32512447a,8582.98396669d,35y,86.50266779h,44.99801846t,0r/data=ClAaThJGCiUweDg5YzZiNzM0MDllMzRhMGY6MHg0NWI1ZTg4OTg5MDdlYmVhGYH0Aw3sCERAIRulprgFyFLAKgtFbGtpbnMgUGFyaxgCIAEoAg">${Personal.lilDicky.From}</a></p>
<p>${Personal.lilDicky.Current}</p>
</div>
</div>`

// const container2 = document.getElementById("Personal")
// container2.appendChild(paragraph);






// paragraph.innerHTML += Personal.Personal.Birthdate
// const container = document.getElementById("Personal")
// container.appendChild(paragraph);

for (let i = 0; i < Family.famMembers.length; i++) {
  let famBam = Family.famMembers[i];
  
}

// paragraph.innerHTML += `<div class="album py-5 bg-">
//       <div class="container">
//         <div class="row">
//         <div class="col-md-4">
//             <div class="card mb-4 box-shadow">
//               <img class="card-img-top" data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail" alt="Thumbnail [100%x225]" style="height: 225px; width: 100%; display: block;" src="${Personal.famMembers.famMom.Photo}" data-holder-rendered="true">
//               <div class="card-body">
//                 <p class="card-text">${Personal.famMembers.famMom.Name}</p>
//                 <div class="d-flex justify-content-between align-items-center">
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
// </div>`


// {/* <div class="col-md-4">
//             <div class="card mb-4 box-shadow">
//               <img class="card-img-top" data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail" alt="Thumbnail [100%x225]" style="height: 225px; width: 100%; display: block;" src="images/patty_img.jpg" data-holder-rendered="true">
//               <div class="card-body">
//                 <p class="card-text">Mom: Patty Loveless</p>
//                 <div class="d-flex justify-content-between align-items-center">
//                 </div>
//               </div>
//             </div>
//           </div> */}