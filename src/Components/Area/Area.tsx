import { useCallback, useState } from 'react';
import { toast } from 'react-toastify';
import { AreaCell } from 'Components/AreaCell';
import { BaseButton } from 'Components/BaseButton';
import { isEqualPositions } from 'helpers/isEqualPositions';
import { calcPath } from 'helpers/calcPath';
import { getBarrierMatrix } from 'helpers/getBarrierMatrix';
import { getCellByVariant } from 'helpers/getCellByVariant';
import { AREA_SIZE } from 'constants/Area';
import { CellVariant } from 'constants/CellVariant';
import { Position } from 'interfaces/Position';
import { MarkedCell } from './Area.types';
import classes from './Area.module.scss';

const cells: number[] = Array.from({ length: AREA_SIZE * AREA_SIZE });

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

  const handleFindPath = () => {
    const start = getCellByVariant(markedCells, CellVariant.Start);
    const finish = getCellByVariant(markedCells, CellVariant.Finish);

    if (!start || !finish) {
      toast.warn('Choose start and finish positions!');
      return;
    }

    const path = calcPath(getBarrierMatrix(markedCells), start.position, finish.position);

    if (!path) {
      toast.info('No path found!');
      return;
    }

    setMarkedCells((prevCells) => [
      ...prevCells,
      ...path.map((item) => ({ position: item, type: CellVariant.Path })),
    ]);
    toast.success('Path found successfully!');
  };

  const handleClear = () => {
    setMarkedCells([]);
  };

  const getCellVariant = (position: Position) => {
    const cell = markedCells.find((cell) => isEqualPositions(cell.position, position));

    if (cell) {
      return cell.type;
    }

    return CellVariant.Empty;
  };

  return (
    <div className={classes.area_container}>
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
      <div className={classes.buttons}>
        <BaseButton onClick={handleFindPath}>Find Path</BaseButton>
        <BaseButton onClick={handleClear}>Clear</BaseButton>
      </div>
    </div>
  );
};
