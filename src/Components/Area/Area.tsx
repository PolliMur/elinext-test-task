import { useCallback, useState } from 'react';
import { AreaCell } from 'Components/AreaCell';
import { isEqualPositions } from 'helpers/isEqualPositions';
import { AREA_SIZE } from 'constants/Area';
import { CellVariant } from 'constants/CellVariant';
import { Position } from 'interfaces/Position';
import { MarkedCell } from './Area.types';
import classes from './Area.module.scss';

const cells = Array.from({ length: AREA_SIZE * AREA_SIZE });

export const Area = () => {
  const [markedCells, setMarkedCells] = useState<MarkedCell[]>([]);

  const markCell = useCallback((position: Position, type: CellVariant) => {
    setMarkedCells((prevCells) => {
      let cells = prevCells;

      if (type === CellVariant.Start || type === CellVariant.Finish) {
        cells = cells.filter((cell) => cell.type !== type);
      }

      return [
        ...cells.filter((cell) => !isEqualPositions(cell.position, position)),
        { position, type },
      ];
    });
  }, []);

  const unmarkCell = useCallback((position: Position) => {
    setMarkedCells((prevCells) => {
      return prevCells.filter((cell) => !isEqualPositions(cell.position, position));
    });
  }, []);

  const getCellVariant = (position: Position) => {
    const cell = markedCells.find((cell) => isEqualPositions(cell.position, position));

    if (cell) {
      return cell.type;
    }

    return CellVariant.Empty;
  };

  return (
    <div className={classes.area}>
      {cells.map((_, index) => {
        const x = index % AREA_SIZE;
        const y = Math.trunc(index / AREA_SIZE);

        return (
          <AreaCell
            key={index}
            x={x}
            y={y}
            variant={getCellVariant({ x, y })}
            markCell={markCell}
            unmarkCell={unmarkCell}
          />
        );
      })}
    </div>
  );
};
