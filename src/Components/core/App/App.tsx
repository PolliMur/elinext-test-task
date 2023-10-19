import { useCallback, useMemo, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import { Area } from 'Components/Area';
import { Container } from 'Components/layout/Container';
import { InstructionDialog } from 'Components/InstructionDialog';
import { useContextMenu } from 'hooks/useContextMenu';
import { MenuContext } from 'context/menu';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const [isOpen, setIsOpen] = useState(true);
  const { MenuContainer, openContextMenu, closeContextMenu } = useContextMenu();

  const menuContextValue = useMemo(
    () => ({ openContextMenu, closeContextMenu }),
    [openContextMenu, closeContextMenu]
  );

  const openInfoDialog = useCallback(() => {
    setIsOpen(true);
  }, []);

  return (
    <Container>
      <MenuContext.Provider value={menuContextValue}>
        <Area openInfoDialog={openInfoDialog} />
      </MenuContext.Provider>
      <ToastContainer />
      {MenuContainer && <MenuContainer />}
      {isOpen && <InstructionDialog setIsOpen={setIsOpen} />}
    </Container>
  );
};

export default App;
