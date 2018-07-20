//database object
const htmlData = {}
//arrays in the database object
htmlData.info = []
htmlData.collabs = []
htmlData.skills = []
htmlData.lived = []
htmlData.works = []
htmlData.awards = []
htmlData.setup =[]

//function to convert object from database into string
const saveDatabase = function (databaseObject, localStorageKey) {
    const stringifiedDatabase = JSON.stringify(databaseObject)
    localStorage.setItem(localStorageKey, stringifiedDatabase)
}
//function to convert string back into object
const loadDatabase = function (localStorageKey) {
    const databaseString = localStorage.getItem(localStorageKey)
    return JSON.parse(databaseString)
}
//function to add text into the html
const dumbLoop = function (abc, cab){
    for (i=2; i<=abc.length-3; i++){
       let dumb = document.getElementById(cab);
        dumb.innerHTML+= abc[i];
    }
}

//stuff to insert into the database
let careerInfo =  "Lil Dicky is a comedian rapper hailing from an upper middle class neighborhood in Philidelphia. He has released one mixtape, one studio album, one e.p., and five singles. Lil Dicky began his career in 2011 and would release his finished mixtape in 2013. Lil Dicky first gained wide-spread fame with the release of the music video for his song 'Ex-Boyfriend'.";

let careerCollabs = "Lil Dicky has collabed with artists such as T-Pain, Snoop Dogg, Rich Homie Quan, Fetty Wap, Brendon Urie, Kent Jones, Trinidad James, The Game, and Chris Brown These different collaborations have recieved mixed amounts of fame, from the underwhelming feature in 'Sit Down' to the mega-hit 'Freaky Friday'. The wide range of talent, both proven and new help to showcase the abilities of Lil Dicky and prove that he doesn't just ride on the coattails his featured guests.";

let careerSkills = "Lil Dicky is talented in both the fields of rapping and comedy. His goal is to be able to make stable careers out of the two at the same time. Originally an accountant, he spent two years planning out his rap career.";

let careerLived = "Lil Dicky grew up in Cheltenham Township, Pennsylvania, where he lived from 1988 until the end of his high school career. Lil Dicky attended the University of Richmond in Richmond, Virginia where he graduated in 2010. After graduating college, Lil Dicky moved to Sanfrancisco, California. In 2018, Lil Dicky purchased the house pictured above for 2.5 million dollars. in the illustrious Venice neighborhood in California.";

let careerWorks = "Lil Dicky's debut began with the release of his mixtape 'So Hard' in 2013. From there, he would release the singles 'Lemme Freak' and 'White Crime' in 2014 and 'Save Dat Money' and 'Professional Rapper' in 2015. The release of these singles would build up to the release of his first studio album 'Professional Rapper' in 2015. Since the release of his album,he has been featured in two songs 'Just a Lil' Thick (She Juicy)' and 'Sit Down'. He also released the EP 'I'm Brain' in 2017 and the mega-hit single 'Freaky Friday' in 2018.";

let careerAwards = "Lil Dicky has recieved several awards for his music based on sales. His singles have done particulary well, with 'Lemme Freak' being RIAA certified gold, 'Save Dat Money' being RIAA certified platinum, 'Professional Rapper' being RIAA certified gold, and 'Freaky Friday' being RIAA certified platinum, ARIA certified platinum, BPI certified platinum, and RMNZ certified platinum. His only studio album, Professional Rapper, was RIAA certified Gold and peaked at number 7 on the US Billboard Top 100.";


//put info into database, then local storage, call the info and put into html through id
htmlData.info.push(careerInfo);
saveDatabase(htmlData.info, "careerinfo" );
loadDatabase("careerinfo");
dumbLoop(localStorage.careerinfo, "doesItWork");

htmlData.collabs.push(careerCollabs);
saveDatabase(htmlData.collabs, "careerCollabs" );
loadDatabase("careerCollabs");
dumbLoop(localStorage.careerCollabs, "doesItWorkTwoElectricBoogaloo");

htmlData.skills.push(careerSkills);
saveDatabase(htmlData.skills, "careerSkills" );
loadDatabase("careerSkills");
dumbLoop(localStorage.careerCollabs, "doesItWorkThreeDespicableMe");

htmlData.lived.push(careerLived);
saveDatabase(htmlData.lived, "careerLived" );
loadDatabase("careerLived");
dumbLoop(localStorage.careerLived, "doesItWorkFourSalesPeopleAtTheDoor");

htmlData.works.push(careerWorks);
saveDatabase(htmlData.works, "careerWorks" );
loadDatabase("careerWorks");
dumbLoop(localStorage.careerWorks, "doesItWorkFiveTheySellSteakKnives");

htmlData.awards.push(careerAwards);
saveDatabase(htmlData.awards, "careerAwards" );
loadDatabase("careerAwards");
dumbLoop(localStorage.careerAwards, "doesItWorkSixTheUninspiredTitle");



endGameContent = "<div  class ='career row card-deck justify-content-around' id = 'career'><div class = 'column'>"

for(i=2; i<=abc.length-3; i++){
    endGameContent += '<div class = "card info" style="width: 18rem;"> <!--Start info div-->
    <img class="card-img-top weirdPic" src="images/lildickycareerinfo.jpg" alt="Lil Dicky making a small hand motion">
    <h5 class="card-title text-center"> Career</h5>
      <p class ="card-text" id = "doesItWork"></p>
  </div><!--End Info div-->

  <div class = "card" style="width: 18rem;"> <!--Start collab div-->
    <img class="card-img-top weirdPic" src="images/lil_dicky_snoop_collab.jpg" alt="Collab Pic">
    <h5 class="card-title text-center"> Collabs</h5>
      <p class ="card-text" id = "doesItWorkTwoElectricBoogaloo"></p>
    </div><!--End Collabs div-->

  </div><!--End column for intro and collabs-->
  
  <div class = "column"><!--Skills and places lived column div-->
    <div class = "card" style="width: 18rem;"><!--Skills div-->
      <img class="card-img-top weirdPic" src="images/lil_dicky_rapping.jpg" alt="Lil Dicky Rapping">
      <h5 class="card-title text-center">Skills</h5>
      <p class="card-text" id = "doesItWorkThreeDespicableMe"> </p>
    </div><!--End Skills div-->

    <div><!--start Places lived div-->
      <div class = "card" style="width: 18rem;">
        <img class="card-img-top weirdPic" src="images/lil_dicky_house.jpg" alt="Lil Dicky's Venice House">
        <h5 class="card-title text-center">Places Lived</h5>
        <p class="card-text" id ="doesItWorkFourSalesPeopleAtTheDoor"></p>
      </div>
    </div><!--End places lived div-->
  </div><!--End Skills and places lived column div-->



  <div class = "column"><!--Published works and Awards div-->
    <div class = "card" style="width: 18rem;"><!--Published Works div-->
      <img class="card-img-top weirdPic" src="images/lil_dicky_album_freaky_friday.jpg" alt="Lil Dicky's Freaky Friday artwork">
      <h5 class="card-title text-center">Published Works</h5>
      <p class="card-text" id = "doesItWorkFiveTheySellSteakKnives"></p>
    </div><!--End Published Works div-->
    <div><!--start Awards div-->
      <div class = "card" style="width: 18rem;">
        <img class="card-img-top weirdPic" src="images/certified_platinum.png" alt="RIAA Certified Platinum Record">
        <h5 class="card-title text-center">Awards</h5>
        <p class="card-text" id = "doesItWorkSixTheUninspiredTitle"></p>
      </div>
    </div><!--Awards-->
  </div><!--End Published works and Awards div-->'
}