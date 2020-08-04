  // -    -   -   -   -  //
 // JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log("Dress The Clown!")

//Write function to dress clowns head

var head = 0
var body = 0
var shoes = 0

var head = document.getElementById("head");
var body = document.getElementById("body");
var shoes = document.getElementById("shoes");

var headIndex = 0
var bodyIndex = 0
var shoesIndex = 0

var mainIndex = 0
var moveAroundBody = 0

//Listen out for arrow keystrokes; assign to a function
document.addEventListener("keydown", function(event) {
  //Right Arrow
  if (event.keyCode == 39) {
    event.preventDefault();
    console.log ("Right arrow pressed");
    changeRight(1);
  }
  //Left Arrow
  else if (event.keyCode == 37) {
    event.preventDefault();
    console.log ("Left arrow pressed");
    changeLeft(-1);
  }
  //Up Arrow
  else if (event.keyCode == 38) {
    console.log ("Up arrow pressed");
    event.preventDefault();
    moveUpBody(-1);
  }
  //Down Arrow
  else if (event.keyCode == 40) {
    console.log ("Down arrow pressed");
    event.preventDefault();
    moveDownBody(1);
  }
  });

//Function using right arrow to change up through items of clothes 
  function changeRight() {
    if (mainIndex == 0) {
      if (headIndex < 5) {
        headIndex ++;
        head.src = "./images/head" + headIndex + ".png"
      }
    }
    else if (mainIndex == 1) {
      if (bodyIndex < 5) {
        bodyIndex ++;
        body.src = "./images/body" + bodyIndex + ".png"
      }
    }
    else if (mainIndex == 2) {
    if (shoesIndex < 5) {
        shoesIndex ++;
        shoes.src = "./images/shoes" + shoesIndex + ".png"
      }
    }
  }

//Function using left arrow to change down through items of clothes
function changeLeft() {
  if (mainIndex == 0) {
    if (headIndex > 0) {
      headIndex --;
      head.src = "./images/head" + headIndex + ".png"
    }
  }
    
  else if (mainIndex == 1) {
    if (bodyIndex > 0) {
      bodyIndex --;
      body.src = "./images/body" + bodyIndex + ".png"
    }
  }

  else if (mainIndex == 2) {
    if (shoesIndex > 0) {
      shoesIndex --;
      shoes.src = "./images/shoes" + shoesIndex + ".png"
    }
  }
}
  
function moveUpBody() {
  if (mainIndex > 0)
  mainIndex--
}

function moveDownBody() {
  if (mainIndex < 2)
  mainIndex++
}