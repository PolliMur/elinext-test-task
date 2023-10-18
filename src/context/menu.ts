import { useContext, createContext } from 'react';
import { ContextMenuProps } from 'Components/ContextMenu/ContextMenu.types';

interface IMenuContext {
  openContextMenu: (props: Omit<ContextMenuProps, 'onClose'>) => void;
  closeContextMenu: () => void;
}

export const MenuContext = createContext<IMenuContext>({
  openContextMenu() {},
  closeContextMenu() {},
});

export const useContextMenu = () => {
  return useContext(MenuContext);
};
