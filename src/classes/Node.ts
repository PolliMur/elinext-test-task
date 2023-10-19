export class Node {
  x: number;
  y: number;
  g: number;
  h: number;
  f: number;
  parent: Node | null;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
    this.g = 0;
    this.h = 0;
    this.f = 0;
    this.parent = null;
  }

  calculateHeuristic(target: Node) {
    this.h = Math.abs(this.x - target.x) + Math.abs(this.y - target.y);
  }
}
