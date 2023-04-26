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

generateGridTiem(25);

function generateGridTiem(cells) {
  //craezione della cella

  for (counter = 0; counter <= cells; counter++) {
    let gridItem = document.createElement("div");
    gridItem.classList.add("card");
    gridContainer.appendChild(gridItem);
  }

  //moltiplicazione delle celle secondo i parametri
}
