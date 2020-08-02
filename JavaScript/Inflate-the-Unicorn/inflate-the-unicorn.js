  // -    -   -   -   -  //
 // JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //
var unicorn0 = 0
var unicorn1 = 0
var unicorn2 = 0

var unicorn0 = document.getElementById("unicorn0")
var unicorn1 = document.getElementById("unicorn1")
var unicorn2 = document.getElementById("unicorn2")

var inflatLevel0 = 0
var inflatLevel1 = 0
var inflatLevel2 = 0

unicorn0.onclick = checkCalled
unicorn1.onclick = checkCalled
unicorn2.onclick = checkCalled

function checkCalled(event) {
  var unicornID = event.target

  if (unicornID.id == "unicorn0") {
    inflatLevel0++
    unicornID.src = "./images/unicorn-" + inflatLevel0 + ".png"
    if (inflatLevel0 == 3){
      window.alert("Unicorn Number " + unicornID.id + " says thank you!")
      inflatLevel0 = 0
    }
  }
  if (unicornID.id == "unicorn1") {
    inflatLevel1++
    unicornID.src = "./images/unicorn-" + inflatLevel1 + ".png"
    if (inflatLevel1 == 3){
      window.alert("Unicorn Number " + unicornID.id + " says thank you!")
      inflatLevel1 = 0
    }
  }
  if (unicornID.id == "unicorn2") {
    inflatLevel2++
    unicornID.src = "./images/unicorn-" + inflatLevel2 + ".png"
    if (inflatLevel2 == 3){
      window.alert("Unicorn Number " + unicornID.id + " says thank you!")
      inflatLevel2 = 0
    }
  }



}
unicorn0();
//Replace placeholder images with 'unicorn-0' in HTML
//Write function that gets called every time you click on one of the unicorns
//Use the 'onclick' method to call it (.onClick - pt 2 a fx, get reference)
//Console.log & check in Dev Tools console to see if worked or not
//Upon click the button, yur function should change the image of the unicorn to the next image (incrementing up by 1)
//Check 'How do I change an HTML image using JS'?
//Change the unicorn image in order; this needs to keep track of the current order number
//Create variable & store unicorn in single object state or array where e.g.
// var unicorn1 = 0 or
// var unicorn1 = "empty"
//Cycling through all images an alert should pop up saying something like, "Unicorn Number x says thank you!"
//Or instead of popping up an alert, what else could happen?
//Add sound effect