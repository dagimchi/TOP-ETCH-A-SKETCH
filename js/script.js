let container = document.querySelector(".container");

for (let i = 1; i <= 256; i++) {
  let div = document.createElement("div");
  div.style.width = "25px";
  div.style.height = "25px";
  div.style.border = "1px solid black";
  container.appendChild(div);
}
