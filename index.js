console.log("run -- OK");

let btnGridGenerator = document.querySelector("#btnGridGenerator");
let gridContainer = document.querySelector("#gridContainer");

let celleDagenerare = setDifficult();
generateGrid(celleDagenerare);

btnGridGenerator.addEventListener("click", setDifficult);
function setDifficult() {
  let difficoltà;
  if (btnGridGenerator.value === "easy") {
    difficoltà = 100;
  } else if (btnGridGenerator.value === "medium") {
    difficoltà = 50;
  } else if (btnGridGenerator.value === "hard") {
    difficoltà = 35;
  }
  console.log(difficoltà);
  return difficoltà;
}
function generateGrid(celle) {
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
