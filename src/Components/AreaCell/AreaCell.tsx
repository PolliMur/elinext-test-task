import { memo } from 'react';
import { clsx } from 'helpers/clsx';
import { CellVariant } from 'constants/CellVariant';
import { AreaCellProps } from './AreaCell.types';
import classes from './AreaCell.module.scss';

const AreaCell = ({ variant = CellVariant.Empty }: AreaCellProps) => (
  <button className={clsx(classes.area_cell, classes[`cell_${variant}`])}></button>
);

export default memo(AreaCell);
