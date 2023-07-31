let container = document.querySelector(".container");
let btnGrid = document.querySelector(".btn-grid");
let btnDelete = document.querySelector(".btn-delete");
let divs = document.querySelectorAll(".container div");
let btnEraser = document.querySelector(".btn-eraser");
let btnColor = document.querySelector("input");
let btnRandom = document.querySelector(".btn-random");
let mouseDown = false;
// DEFAULT 16X16 GRID INITIAL VALUE IF DELETING GRID WITH SAID DIMENSION
let globalGridNum = 16;

getInitialGrid();

function getInitialGrid() {
  // Loop must run 256 times because of the initial 16x16 grid
  for (let i = 1; i <= 256; i++) {
    let div = document.createElement("div");
    // THE GRID ITSELF MUST REMAIN 600 PX WIDE / 16 = 37.5PX PER DIV
    div.style.width = `${600 / 16}px`;
    div.style.height = `${600 / 16}px`;

    container.appendChild(div);
  }

  container.addEventListener("mousedown", () => {
    mouseDown = true;
  });

  container.addEventListener("mousemove", (e) => {
    if (mouseDown) {
      e.target.style.backgroundColor = "red";
    }
  });

  window.addEventListener("mouseup", () => {
    if (mouseDown) {
      mouseDown = false;
    }
  });
}

function insertChildNodes(num) {
  for (let i = 1; i <= num * num; i++) {
    let div = document.createElement("div");
    div.style.width = `${600 / num}px`;
    div.style.height = `${600 / num}px`;
    container.appendChild(div);
  }
}

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

function getNewGrid() {
  let gridNum = +prompt(
    "Please enter how many squares per side for the new grid."
  );
  globalGridNum = gridNum;
  if (gridNum >= 1 && gridNum <= 100) {
    removeAllChildNodes(container);
    insertChildNodes(gridNum);
  } else {
    alert("Please enter a valid number from 1 to 100.");
  }
}

// GET NEW GRID DIMENSIONS BTN
btnGrid.addEventListener("click", getNewGrid);

// DELETE CURRENT DRAWING BTN
btnDelete.addEventListener("click", () => {
  removeAllChildNodes(container);
  insertChildNodes(globalGridNum);
});

// USED FOR BELOW FUNCTION THAT DELETES VIA ERASER
function doMouseAction(value) {
  container.addEventListener("mousedown", () => {
    mouseDown = true;
  });

  container.addEventListener("mousemove", (e) => {
    if (mouseDown) {
      e.target.style.backgroundColor = `${value}`;
    }
  });

  window.addEventListener("mouseup", () => {
    if (mouseDown) {
      mouseDown = false;
    }
  });
}

btnEraser.addEventListener("click", () => {
  if (btnRandom.classList.contains("click-bg")) {
    btnRandom.classList.remove("click-bg");
    btnRandom.style.color = "black";
  } else if (btnColor.classList.contains("border-black")) {
    btnColor.classList.remove("border-black");
  }
  btnEraser.classList.add("click-bg");
  btnEraser.style.color = "white";
  doMouseAction("white");
});

// GET COLOR BTN THAT USER SELECTS FROM
btnColor.addEventListener("click", () => {
  if (btnRandom.classList.contains("click-bg")) {
    btnRandom.classList.remove("click-bg");
    btnRandom.style.color = "black";
  } else if (btnEraser.classList.contains("click-bg")) {
    btnEraser.classList.remove("click-bg");
    btnEraser.style.color = "black";
  }
  btnColor.classList.add("border-black");
  container.addEventListener("mousedown", () => {
    mouseDown = true;
  });

  container.addEventListener("mousemove", (e) => {
    if (mouseDown) {
      e.target.style.backgroundColor = `${btnColor.value}`;
    }
  });

  window.addEventListener("mouseup", () => {
    if (mouseDown) {
      mouseDown = false;
    }
  });
});

// RETURNS A RANDOM NUM FROM 0 TO 255
function randomNum() {
  return Math.floor(Math.random() * 256);
}

// GET RANDOM COLORS BTN USING ABOVE FUNCTION
btnRandom.addEventListener("click", () => {
  if (btnEraser.classList.contains("click-bg")) {
    btnEraser.classList.remove("click-bg");
    btnEraser.style.color = "black";
  } else if (btnColor.classList.contains("border-black")) {
    btnColor.classList.remove("border-black");
  }
  btnRandom.classList.add("click-bg");
  btnRandom.style.color = "white";
  container.addEventListener("mousedown", () => {
    mouseDown = true;
  });

  container.addEventListener("mousemove", (e) => {
    if (mouseDown) {
      e.target.style.backgroundColor = `rgb(${randomNum()}, ${randomNum()}, ${randomNum()})`;
    }
  });

  window.addEventListener("mouseup", () => {
    if (mouseDown) {
      mouseDown = false;
    }
  });
});
