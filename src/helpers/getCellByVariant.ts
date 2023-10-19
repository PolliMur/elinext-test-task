import { MarkedCell } from 'Components/Area/Area.types';
import { CellVariant } from 'constants/CellVariant';

export const getCellByVariant = (markedCells: MarkedCell[], variant: CellVariant) => {
  return markedCells.find((cell) => cell.type === variant);
};
