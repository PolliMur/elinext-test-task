import { createPortal } from 'react-dom';
import { useClickOutside } from 'hooks/useClickOutside';
import { ContextMenuProps } from './ContextMenu.types';
import classes from './ContextMenu.module.scss';

export const ContextMenu = ({ offset, options, onSelect, onClose }: ContextMenuProps) => {
  const handleSelect = (id: string) => () => {
    onSelect(id);
    onClose();
  };

  const menuRef = useClickOutside<HTMLUListElement>(onClose);

  return createPortal(
    <ul ref={menuRef} className={classes.menu} style={{ top: offset.y, left: offset.x }}>
      {options.map((option) => (
        <li
          key={option.id}
          role="button"
          onClick={handleSelect(option.id)}
          className={classes.option}
        >
          {option.label}
        </li>
      ))}
    </ul>,
    document.body
  );
};
