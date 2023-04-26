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

btnGridGenerator.addEventListener("click", generateGridTiem);

function generateGridTiem() {
  //craezione della cella
  let gridItem = document.createElement("div");
  gridItem.classList.add("card");

  let gridList = [];

  for (counter = 0; counter <= 2; counter++) {
    gridList.push(gridItem);
    console.log(gridList);
    gridContainer.appendChild(gridItem);
  }

  //moltiplicazione delle celle secondo i parametri
}
