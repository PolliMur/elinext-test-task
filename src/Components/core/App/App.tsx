import { useMemo } from 'react';
import { Area } from 'Components/Area';
import { Container } from 'Components/layout/Container';
import { useContextMenu } from 'hooks/useContextMenu';
import { MenuContext } from 'context/menu';

const App = () => {
  const { MenuContainer, openContextMenu, closeContextMenu } = useContextMenu();

  const menuContextValue = useMemo(
    () => ({ openContextMenu, closeContextMenu }),
    [openContextMenu, closeContextMenu]
  );

  return (
    <Container>
      <MenuContext.Provider value={menuContextValue}>
        <Area />
      </MenuContext.Provider>
      {MenuContainer && <MenuContainer />}
    </Container>
  );
};

export default App;
