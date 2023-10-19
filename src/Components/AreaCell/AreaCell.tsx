import { memo, MouseEvent } from 'react';
import { MenuItem } from 'Components/ContextMenu/ContextMenu.types';
import { useContextMenu } from 'context/menu';
import { clsx } from 'helpers/clsx';
import { CellVariant } from 'constants/CellVariant';
import { AreaCellProps } from './AreaCell.types';
import classes from './AreaCell.module.scss';

const cellActions: MenuItem[] = [
  { id: CellVariant.Start, label: 'Start' },
  { id: CellVariant.Finish, label: 'Finish' },
  { id: CellVariant.Barrier, label: 'Barrier' },
];

const AreaCell = ({ x, y, variant = CellVariant.Empty, markCell, unmarkCell }: AreaCellProps) => {
  const { openContextMenu } = useContextMenu();
  const position = { x, y };

  const handleContextMenu = (event: MouseEvent) => {
    event.preventDefault();

    openContextMenu({
      offset: { x: event.clientX, y: event.clientY },
      options: cellActions,
      onSelect(optionId) {
        markCell(position, optionId as CellVariant);
      },
    });
  };

  const handleClick = () => {
    if (variant === CellVariant.Empty) {
      markCell(position, CellVariant.Barrier);
      return;
    }

    unmarkCell(position);
  };

  return (
    <button
      className={clsx(classes.area_cell, classes[`cell_${variant}`])}
      onClick={handleClick}
      onContextMenu={handleContextMenu}
    >
      {variant !== CellVariant.Empty && variant.slice(0, 1)}
    </button>
  );
};

export default memo(AreaCell);
