// El styles lo importamos aquí, ya se carga después al compilar todo
import "../scss/styles.scss";

const titleElement = document.getElementById("start-point");
console.log(
  `Soy un ${titleElement.tagName} con el id ${titleElement.id}, y la clase ${titleElement.className}. Mi padre es un ${titleElement.parentElement.tagName} con el id ${titleElement.parentElement.id} y la clase ${titleElement.parentElement.className}. Mi hermano es un ${titleElement.previousElementSibling.previousElementSibling.tagName} con el id ${titleElement.previousElementSibling.previousElementSibling.id} y clase ${titleElement.previousElementSibling.previousElementSibling.className}. Mi hermano ${titleElement.previousElementSibling.tagName} con id ${titleElement.previousElementSibling.id} y clase ${titleElement.previousElementSibling.className}.`
);

const ulElement = document.getElementById("first-list");
const ulElement2 = document.getElementById("second-list");

ulElement.textContent = "Second List - Item 1";
console.log(ulElement);
