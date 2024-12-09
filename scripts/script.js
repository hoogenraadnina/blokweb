


var openButton = document.querySelector("header > button");
// menu button = reactie op klik en dan gaat ie open
openButton.onclick = openMenu;

// stap 3: voeg in de functie een class toe aan de nav

function openMenu() {  
  // menu vinden
  var deNav = document.querySelector("nav");   // nieuwe class aangemaakt
  deNav.classList.add("toonMenu");
}


// sluiten button
var sluitButton = document.querySelector("nav button");

// onclick sluitmenu aangemaakt
sluitButton.onclick = sluitMenu;

// als je weer op kruisje klikt gaat de menu dicht
function sluitMenu() {
  var deNav = document.querySelector("nav");
  deNav.classList.remove("toonMenu");
}


