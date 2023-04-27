console.log("run -- OK");
let gridContainer = document.querySelector("#gridContainer");
let btnGridGenerator = document.querySelector("#btnGridGenerator");
let btnSetGrid = document.querySelector("#btnSetGrid");
let btnResetGrid = document.querySelector("#btnResetGrid");

//eventi
btnResetGrid.addEventListener("click", resetGrid);
function resetGrid() {
  window.location.reload(true);
}

btnSetGrid.addEventListener("click", setGrid);
function setGrid(value) {
  value = btnGridGenerator.value;
  if (value === "easy") {
    difficoltà = 99;
  } else if (value === "medium") {
    difficoltà = 59;
  } else if (value === "hard") {
    difficoltà = 39;
  }

  for (counter = 0; counter <= difficoltà; counter++) {
    let gridItem = document.createElement("button");
    gridItem.classList.add("card", "btn");
    gridItem.innerHTML = generateRandomInt();
    gridContainer.appendChild(gridItem);
  }

  btnSetGrid.classList.add("hide");
  btnGridGenerator.classList.add("hide");

  let textHeader = document.querySelector("#textHeader");
  textHeader.classList.add("hide");

  let gridSelected = document.querySelectorAll(".card");
  gridSelected.forEach((card) => {
    card.addEventListener("click", () => {
      card.classList.add("card--active");
    });
  });
}

function addClassActive() {
  gridSelected.classList.add("card--active");
}

function generateRandomInt() {
  let randomInt = Math.floor(Math.random() * 101);
  return randomInt;
}
