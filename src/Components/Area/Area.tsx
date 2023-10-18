import { AreaCell } from 'Components/AreaCell';
import { AREA_SIZE } from 'constants/Area';
import classes from './Area.module.scss';

const cells = Array.from({ length: AREA_SIZE * AREA_SIZE });

export const Area = () => {
  return (
    <div className={classes.area}>
      {cells.map((_, index) => {
        const x = index % AREA_SIZE;
        const y = Math.trunc(index / AREA_SIZE);

        return <AreaCell key={index} />;
      })}
    </div>
  );
};
