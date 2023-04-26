console.log("run -- OK");

//bottoni
let btnGridGenerator = document.querySelector("#btnGridGenerator");
let gridContainer = document.querySelector("#gridContainer");

let celle = 100 - 1;
btnGridGenerator.addEventListener("click", generateGrid);

function generateGrid() {
  //craezione della cella

  for (counter = 0; counter <= celle; counter++) {
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
