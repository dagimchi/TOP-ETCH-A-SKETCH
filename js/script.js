let container = document.querySelector(".container");
let mouseDown = false;

for (let i = 1; i <= 256; i++) {
  let div = document.createElement("div");
  div.style.width = "25px";
  div.style.height = "25px";
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
