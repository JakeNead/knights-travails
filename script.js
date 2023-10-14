//Knight([start[0] - 2, start[1] + 1]);
//Knight([start[0] - 1, start[1] + 2]);
//Knight([start[0] + 1, start[1] + 2]);
//Knight([start[0] + 2, start[1] + 1]);
//Knight([start[0] + 2, start[1] - 1]);
//Knight([start[0] + 1, start[1] - 2]);
//Knight([start[0] - 1, start[1] - 2]);
// Knight([start[0] - 2, start[1] - 1]);

function Gameboard(start) {
  const knight = Knight(start);
}

function knightMoves(start, end) {
  if (start.toString() === end.toString()) return start;
  let arr = [start];
  const queue = [Knight(start)];
  while (queue.length > 0) {
    if (queue[0].position.toString() === end.toString()) {
      queue[0].path.push(end);
      console.log(queue[0].path);
      arr = queue[0].path;
      break;
    }
    const p = queue[0].position;
    console.log(queue[0].path);
    queue[0].path.push(p);
    console.log(queue[0].path);

    if (p[0] - 2 >= 0 && p[0] - 2 <= 8 && p[1] + 1 >= 0 && p[1] + 1 <= 8) {
      queue.push(Knight([p[0] - 2, p[1] + 1], queue[0].path));
    }
    if (p[0] - 1 >= 0 && p[0] - 1 <= 8 && p[1] + 2 >= 0 && p[1] + 2 <= 8) {
      queue.push(Knight([p[0] - 1, p[1] + 2], queue[0].path));
    }
    if (p[0] + 1 >= 0 && p[0] + 1 <= 8 && p[1] + 2 >= 0 && p[1] + 2 <= 8) {
      queue.push(Knight([p[0] + 1, p[1] + 2], queue[0].path));
    }
    if (p[0] + 2 >= 0 && p[0] + 2 <= 8 && p[1] + 1 >= 0 && p[1] + 1 <= 8) {
      queue.push(Knight([p[0] + 2, p[1] + 1], queue[0].path));
    }
    if (p[0] + 2 >= 0 && p[0] + 2 <= 8 && p[1] - 1 >= 0 && p[1] - 1 <= 8) {
      queue.push(Knight([p[0] + 2, p[1] - 1], queue[0].path));
    }
    if (p[0] + 1 >= 0 && p[0] + 1 <= 8 && p[1] - 2 >= 0 && p[1] - 2 <= 8) {
      queue.push(Knight([p[0] + 1, p[1] - 2], queue[0].path));
    }
    if (p[0] - 1 >= 0 && p[0] - 1 <= 8 && p[1] - 2 >= 0 && p[1] - 2 <= 8) {
      queue.push(Knight([p[0] - 1, p[1] - 2], queue[0].path));
    }
    if (p[0] - 2 >= 0 && p[0] - 2 <= 8 && p[1] - 1 >= 0 && p[1] - 1 <= 8) {
      queue.push(Knight([p[0] - 2, p[1] - 1], queue[0].path));
    }
    queue.shift();
  }
  return arr;
}

function Knight(position, path = []) {
  //make path a nested array
  return { position, path };
}

console.log(knightMoves([0, 0], [3, 3]));

// given start and end location
// if start === end return end
// arr = []
// queue = []
// add all possible first moves to queue as Knight objects
// while queue.length > 0
// if (queue[0].position === end) arr = queue[0].moves, return
// add all next possible moves to the queue as new Knight objs with moves/pos updated
// queue.shift[0]

// return an array of least moves to travel to the end
//
