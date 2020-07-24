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