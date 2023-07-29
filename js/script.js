let container = document.querySelector(".container");
let btnGrid = document.querySelector(".btn-grid");
let btnDelete = document.querySelector(".btn-delete");
let divs = document.querySelectorAll(".container div");
let btnEraser = document.querySelector(".btn-eraser");
let btnColor = document.querySelector("input");
let btnRandom = document.querySelector(".btn-random");
let mouseDown = false;
let globalGridNum = 16;

for (let i = 1; i <= 256; i++) {
  let div = document.createElement("div");
  div.style.width = `${600 / 16}px`;
  div.style.height = `${600 / 16}px`;
  div.style.border = "1px solid black";
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

function insertChildNodes(num) {
  for (let i = 1; i <= num * num; i++) {
    let div = document.createElement("div");
    div.style.width = `${600 / num}px`;
    div.style.height = `${600 / num}px`;
    div.style.border = "1px solid black";
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
btnGrid.addEventListener("click", getNewGrid);

btnDelete.addEventListener("click", () => {
  removeAllChildNodes(container);
  insertChildNodes(globalGridNum);
});

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
  doMouseAction("white");
});

btnColor.addEventListener("click", () => {
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

function randomNum() {
  return Math.floor(Math.random() * 256);
}

btnRandom.addEventListener("click", () => {
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
