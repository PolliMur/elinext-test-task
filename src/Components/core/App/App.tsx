import { useMemo } from 'react';
import { ToastContainer } from 'react-toastify';
import { Area } from 'Components/Area';
import { Container } from 'Components/layout/Container';
import { useContextMenu } from 'hooks/useContextMenu';
import { MenuContext } from 'context/menu';
import 'react-toastify/dist/ReactToastify.css';

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
      <ToastContainer />
      {MenuContainer && <MenuContainer />}
    </Container>
  );
};

export default App;
