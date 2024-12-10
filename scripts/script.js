var openButton = document.querySelector("header > button");
// vind de button in de header
openButton.onclick = openMenu;

function openMenu() {
  var deNav = document.querySelector("nav"); // selecteer nav
  deNav.classList.add("toonMenu"); //aan de nav voeg je een class om menu te tonen
}

var sluitButton = document.querySelector("nav button"); //kruisje geselecteerd

// als op sluitButton klikt = ook sluitMenu
sluitButton.onclick = sluitMenu;

// selecteert nav en verwijdert toonMenu zodat het menu sluit
function sluitMenu() {
  var deNav = document.querySelector("nav");
  deNav.classList.remove("toonMenu");
}
