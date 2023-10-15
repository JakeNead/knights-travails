function Gameboard(start) {
  const knight = Knight(start);
}

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

console.log(knightMoves([0, 0], [0, 0]));
console.log(knightMoves([0, 0], [3, 3]));
console.log(knightMoves([0, 0], [7, 7]));
