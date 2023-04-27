console.log("run -- OK");
let gridContainer = document.querySelector("#gridContainer");

//bottoni
let btnGridGenerator = document.querySelector("#btnGridGenerator");
let btnResetGrid = btnGridGenerator.value;

//eventi

let celleDaAggiungere = setDifficult();
generateGrid(celleDaAggiungere);

btnGridGenerator.addEventListener("click", setDifficult);
function setDifficult() {
  let difficoltà;
  if (btnGridGenerator.value === "easy") {
    difficoltà = 99;
  } else if (btnGridGenerator.value === "medium") {
    difficoltà = 49;
  } else if (btnGridGenerator.value === "hard") {
    difficoltà = 34;
  }

  console.log(btnGridGenerator.value);
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
  });
});

function addClassActive() {
  gridSelected.classList.add("card--active");
}

function generateRandomInt() {
  let randomInt = Math.floor(Math.random() * 101);
  return randomInt;
}
