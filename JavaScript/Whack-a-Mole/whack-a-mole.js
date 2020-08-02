 // -    -   -   -   -  //
 // JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

    //Store or get references to the cells in HTML table
var cells = document.querySelectorAll('td');
// var cells = document.getElementsByTagName('td')

var randomIndex = Math.floor(Math.random() * cells.length)
var randomCell = cells[randomIndex]

//Show mole in chosen cell
//First, create image object
const mole = document.createElement('img');
// mole.setAttribute("id", "mole")
// mole.className = "mole";

mole.src = './mole.png';
mole.id = 'mole';

//Append mole to 'randomCell'
randomCell.appendChild(mole);

mole.onclick = whackedMole;

//function showMole(){

   // var img = document.getElementById("img");
    //var randomIndex = Math.floor(math.random() *cells.length);
    //var randomCell = tableArray[randomIndex];

    //Append img to cell
    // //table[randomCell()].appendChild(mole);
    // mole.addEventListener("Click", randomMole);
    // cells[Math.floor(Math.random() * cells.length)];
    // setInterval(() => {
    // mole();    
    // },
    // 1000);
    // randomMole();
//}

//Create 'whackedMole' Function
function whackedMole() {
    var randomIndex = Math.floor(Math.random() * cells.length)
    randomCell = cells[randomIndex]
    randomCell.appendChild(mole);

//Listen out for when 'whackedMole' is clicked, then play audio    
var audio = new Audio('./whack-audio.wav');
audio.play();
}

    //Add Click Counter
    var click = 0;
    function onclick() {
    click +=1;
    document.getElementById("click").innerHTML = click;
}

console.log("Whack-a-Mole!");

// function showMole (){   // document.getElementsByID("mole").appendChild(mole);
//    }
// document.getElementsByID("mole").appendChild(mole);

//}

// const randomCell = () => cells[Math.floor(Math.random()*cells.length)];
// const showMole = () => randomCell().appendChild(mole);

// mole.addEventListener("click", showMole);
// setInterval(() => {
//     showMole();

// var tds = document.getElementsByTagName("td");

// setInterval(function(){
// 	var randomNumber = Math.floor(Math.random() * tds.length);
// 	tds[randomNumber].appendChild(img);
// // }, 2000);
// function clearAll(){
//     var elements = document.getElementsByTagName('td');
//     for (var i=0;i<elements.length;i++){
//       elements[i].innerHTML="<p></p>";
//     }
//   }