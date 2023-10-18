import { Position } from 'interfaces/Position';

export const isEqualPositions = (firstPosition: Position, secondPosition: Position) => {
  return firstPosition.x === secondPosition.x && firstPosition.y === secondPosition.y;
};
