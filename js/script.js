const fill = document.querySelector(".fill");
const boxies = document.querySelectorAll(".box");

function dragStart() {
  fill.className += " hold";
  setTimeout(() => (fill.className = "invisible"), 0);
}

function dragEnd() {
  fill.className = "fill";
}

function dragOver(e) {
  e.preventDefault();
}

function dragEnter(e, box) {
  e.preventDefault();
  box.className += " hovered";
}

function dragLeave(box) {
  box.className = "box";
}

function dragDrop(box) {
  box.className = "box";
  box.append(fill);
}

fill.addEventListener("dragstart", dragStart);
fill.addEventListener("dragend", dragEnd);

boxies.forEach((box) => {
  box.addEventListener("dragover", dragOver);
  box.addEventListener("dragenter", (e) => {
    dragEnter(e, box);
  });
  box.addEventListener("dragleave", () => {
    dragLeave(box);
  });
  box.addEventListener("drop", () => {
    dragDrop(box);
  });
});
