import { Position } from 'interfaces/Position';

export type MenuItem = {
  id: string;
  label: string;
};

export type ContextMenuProps = {
  offset: Position;
  options: MenuItem[];
  onSelect: (optionId: string) => void;
  onClose: () => void;
};
