//wrap everything in knightTravails module

const chessboard = document.querySelector("#chessboard");
const startCoordinates = document.querySelector("#startCoordinates");
const targetCoordinates = document.querySelector("#targetCoordinates");
const coordinatePath = document.querySelector("#coordinatePath");

(function renderGameboard(start) {
  for (let i = 7; i >= 0; i--) {
    for (let j = 0; j < 8; j++) {
      const cell = document.createElement("div");
      cell.setAttribute("class", "cell");
      cell.setAttribute("id", `[${j},${i}]`);
      chessboard.appendChild(cell);

      const overlay = document.createElement("div");
      overlay.setAttribute("class", "overlay");
      cell.appendChild(overlay);
    }
  }
})();

// this might need to be tweaked
function clearBoard() {
  while (chessboard.firstChild) {
    chessboard.removeChild(chessboard.firstChild);
  }
  renderGameboard();
}

(function eventListeners() {
  let startOrTarget;

  const buttons = document.querySelectorAll("button");

  function removeActiveAttribute() {
    buttons.forEach((el) => {
      el.classList.remove("activeButton");
    });
  }

  const start = document.querySelector("#start");
  start.addEventListener("click", () => {
    startOrTarget = "start";
    removeActiveAttribute();
    start.classList.add("activeButton");
  });

  const target = document.querySelector("#target");
  target.addEventListener("click", () => {
    startOrTarget = "target";
    removeActiveAttribute();
    target.classList.add("activeButton");
  });

  const travail = document.querySelector("#travail");
  travail.addEventListener("click", () => {
    removeActiveAttribute();
    const startCell = document.querySelector(".start");
    const targetCell = document.querySelector(".target");
    if (startCell && targetCell) {
      coordinatePath.innerHTML = "";
      startCellId = startCell.getAttribute("id");
      targetCellId = targetCell.getAttribute("id");
      displayCoordinates(
        knightMoves(JSON.parse(startCellId), JSON.parse(targetCellId))
      );
    }
    // display coordinate path in DOM
  });

  function displayCoordinates(arr) {
    arr.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = item;
      coordinatePath.appendChild(li);
    });
  }

  const reset = document.querySelector("#reset");
  reset.addEventListener("click", () => {
    removeActiveAttribute();
    removeStartAndTarget();
    startCoordinates.textContent = "[x,y]";
    targetCoordinates.textContent = "[x,y]";
    coordinatePath.innerHTML = "";
    startOrTarget = "";
  });

  function removeStartAndTarget() {
    const startCell = document.querySelector(".start");
    if (startCell) startCell.classList.remove("start");

    const targetCell = document.querySelector(".target");
    if (targetCell) targetCell.classList.remove("target");
  }

  const cells = document.querySelectorAll(".cell");
  cells.forEach((el) => {
    el.addEventListener("click", () => {
      if (startOrTarget === "start") {
        for (let element of cells) {
          element.classList.remove("start");
        }
        el.classList.add("start");
        startCoordinates.textContent = el.getAttribute("id");
        el.querySelector;
      } else if (startOrTarget === "target") {
        for (let element of cells) {
          element.classList.remove("target");
        }
        el.classList.add("target");
        targetCoordinates.textContent = el.getAttribute("id");
      }
    });
  });

  // on btn click change button style
  //    remove other button styles
  //    toggle cell click action
  //    hover on cell shows knight or target with half opacity
  // on travail click: kMoves()
  //    display numbers on cells
  // on cell click: if place knight/target on change style
})();

function knightMoves(start, end) {
  if (start.toString() === end.toString()) return start;
  let arr = [];
  const queue = [Knight(start)];

  while (queue.length > 0) {
    if (queue[0].position.toString() === end.toString()) {
      queue[0].path.push(end);
      arr = queue[0].path;
      break;
    }
    const p = queue[0].position;
    queue[0].path = queue[0].path.concat([p]);

    const moves = [
      [-2, 1],
      [-1, 2],
      [1, 2],
      [2, 1],
      [2, -1],
      [1, -2],
      [-1, -2],
      [-2, -1],
    ];

    function isLegalMove(move) {
      if (
        p[0] + move[0] >= 0 &&
        p[0] + move[0] <= 7 &&
        p[1] + move[1] >= 0 &&
        p[1] + move[1] <= 7
      ) {
        queue.push(Knight([p[0] + move[0], p[1] + move[1]], queue[0].path));
      }
    }
    moves.forEach(isLegalMove);
    queue.shift();
  }
  return arr;
}

function Knight(position, path = []) {
  return { position, path };
}

// console.log(knightMoves([0, 0], [0, 0]));
// console.log(knightMoves([0, 0], [3, 3]));
// console.log(knightMoves([0, 0], [7, 7]));
