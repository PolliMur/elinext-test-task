import { Position } from 'interfaces/Position';
import { CellVariant } from 'constants/CellVariant';

export type MarkedCell = {
  position: Position;
  type: CellVariant;
};
