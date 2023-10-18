import { CellVariant } from 'constants/CellVariant';
import { Position } from 'interfaces/Position';

export type AreaCellProps = {
  x: number;
  y: number;
  variant?: CellVariant;
  markCell: (position: Position, type: CellVariant) => void;
  unmarkCell: (position: Position) => void;
};
