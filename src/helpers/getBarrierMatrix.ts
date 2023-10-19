import { MarkedCell } from 'Components/Area/Area.types';
import { isEqualPositions } from 'helpers/isEqualPositions';
import { AREA_SIZE } from 'constants/Area';
import { CellVariant } from 'constants/CellVariant';

export const getBarrierMatrix = (markedCells: MarkedCell[]) => {
  const matrix = new Array<number[]>(AREA_SIZE);

  for (let i = 0; i < AREA_SIZE; i++) {
    const matrixRow = new Array<number>(AREA_SIZE).fill(0);
    matrix[i] = matrixRow.map((_, j) =>
      markedCells.find((cell) => isEqualPositions(cell.position, { x: i, y: j }))?.type ===
      CellVariant.Barrier
        ? 1
        : 0
    );
  }

  return matrix;
};
