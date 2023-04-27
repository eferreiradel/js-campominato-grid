console.log("run -- OK");
let gridContainer = document.querySelector("#gridContainer");
let btnGridGenerator = document.querySelector("#btnGridGenerator");
let btnSetGrid = document.querySelector("#btnSetGrid");

//eventi
btnSetGrid.addEventListener("click", setGrid);
function setGrid() {
  let difficoltà;
  if (btnGridGenerator.value === "easy") {
    difficoltà = 99;
  } else if (btnGridGenerator.value === "medium") {
    difficoltà = 59;
  } else if (btnGridGenerator.value === "hard") {
    difficoltà = 39;
  }

  console.log(difficoltà);

  for (counter = 0; counter <= difficoltà; counter++) {
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
