import { FC, memo, useCallback, useState } from 'react';
import { ContextMenuProps } from 'Components/ContextMenu/ContextMenu.types';
import { ContextMenu } from 'Components/ContextMenu';

const EmptyMenu = () => null;

export const useContextMenu = () => {
  const [component, setComponent] = useState<FC>(EmptyMenu);

  const closeContextMenu = useCallback(() => {
    setComponent(EmptyMenu);
  }, []);

  const openContextMenu = useCallback(
    (props: Omit<ContextMenuProps, 'onClose'>) => {
      const menu = memo(() => <ContextMenu {...props} onClose={closeContextMenu} />);
      menu.displayName = 'ContextMenu';
      setComponent(menu);
    },
    [closeContextMenu]
  );

  return { MenuContainer: component, openContextMenu, closeContextMenu };
};
