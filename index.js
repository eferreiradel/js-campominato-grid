/* To dos's

create un layout in html con un bottone
creare una classe estetica per le caselle


Il bottone una volta premuto carica una funzine:
    la funzione appende a un container vuoto le caselle


*/

console.log("run -- OK");

//bottoni
let btnGridGenerator = document.querySelector("#btnGridGenerator");
let gridContainer = document.querySelector("#gridContainer");
generateGridTiem(25);

function generateGridTiem(cells) {
  //craezione della cella

  for (counter = 0; counter <= cells; counter++) {
    let gridItem = document.createElement("button");
    gridItem.classList.add("card", "btn");
    gridItem.innerHTML = generateRandomInt();
    gridContainer.appendChild(gridItem);
  }
}
let gridSelected = document.querySelectorAll(".card");
gridSelected.forEach((card) => {
  card.addEventListener("click", () => {
    card.classList.add("card--active");
    console.log("carta attiva");
  });
});

function addClassActive() {
  gridSelected.classList.add("card--active");
}

function generateRandomInt() {
  let randomInt = Math.floor(Math.random() * 101);
  return randomInt;
}
