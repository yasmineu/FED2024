// JavaScript Document
console.log("hi");

/******************************/
/* menu openen de MENU button */
/******************************/

const menuOpenButton = document.querySelector("header > button");
const deNav = document.querySelector("nav");

menuOpenButton.onclick = openMenu;

function openMenu() {
    deNav.classList.add("toonMenu")
}

/************************************/
/* menu sluiten met de sluit button */
/************************************/

const menuSluitButton = document.querySelector("nav button");

menuSluitButton.onclick = sluitMenu;

function sluitMenu(){
    deNav.classList.remove("toonMenu");
}
