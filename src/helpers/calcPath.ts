import { Node } from 'classes/Node';
import { Position } from 'interfaces/Position';

export const calcPath = (
  grid: number[][],
  startPosition: Position,
  endPosition: Position
): Position[] | null => {
  const start = new Node(startPosition.x, startPosition.y);
  const end = new Node(endPosition.x, endPosition.y);
  const openSet = [];
  const closedSet = [];

  openSet.push(start);

  while (openSet.length > 0) {
    let currentNode: Node = openSet[0];

    for (let i = 1; i < openSet.length; i++) {
      if (openSet[i].f < currentNode.f) {
        currentNode = openSet[i];
      }
    }

    openSet.splice(openSet.indexOf(currentNode), 1);
    closedSet.push(currentNode);

    if (currentNode.x === end.x && currentNode.y === end.y) {
      const path = [];
      let current: Node | null = currentNode;

      while (current) {
        path.push({ x: current.x, y: current.y });
        current = current.parent;
      }

      return path.reverse();
    }

    const neighbors = [];
    const x = currentNode.x;
    const y = currentNode.y;

    const directions = [
      { dx: -1, dy: 0 },
      { dx: 1, dy: 0 },
      { dx: 0, dy: -1 },
      { dx: 0, dy: 1 },
    ];

    for (const dir of directions) {
      const newX = x + dir.dx;
      const newY = y + dir.dy;

      if (newX >= 0 && newX < grid.length && newY >= 0 && newY < grid[0].length) {
        if (grid[newX][newY] !== 1) {
          neighbors.push(new Node(newX, newY));
        }
      }
    }

    for (const neighbor of neighbors) {
      if (closedSet.some((node) => node.x === neighbor.x && node.y === neighbor.y)) {
        continue;
      }

      const tentativeG = currentNode.g + 1;

      if (
        !openSet.some((node) => node.x === neighbor.x && node.y === neighbor.y) ||
        tentativeG < neighbor.g
      ) {
        neighbor.parent = currentNode;
        neighbor.g = tentativeG;
        neighbor.calculateHeuristic(end);
        neighbor.f = neighbor.g + neighbor.h;

        if (!openSet.some((node) => node.x === neighbor.x && node.y === neighbor.y)) {
          openSet.push(neighbor);
        }
      }
    }
  }

  return null;
};
