var database

function setup(){
  createCanvas(500,500)
  database = firebase.database()
  joinArmy = database.ref('would-u-rather-8e9ab/joinArmy');
  cureCovid19=database.ref('would-u-rather-8e9ab/cureCovid19');
}
function draw(){
      background("blue")
     
}