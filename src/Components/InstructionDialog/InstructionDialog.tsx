import { Dialog } from 'Components/Dialog';
import { InstructionDialogProps } from './InstructionDialog.types';
import classes from './InstructionDialog.module.scss';

export const InstructionDialog = ({ setIsOpen }: InstructionDialogProps) => (
  <Dialog title="Path Finder Instructions" setIsOpen={setIsOpen}>
    <ul className={classes.list}>
      <li>
        <strong>Setting the Start Point</strong>: Right-click on the grid cell where you want to set
        the starting point. Then the context menu that appears, select Start."
      </li>
      <li>
        <strong>Setting the Finish Point</strong>: Right-click on the grid cell where you want to
        set the finishing point. Then the context menu that appears, select "Finish."
      </li>
      <li>
        <strong>Placing Barriers</strong>: To place a barrier, you have two options. Right-click on
        the grid cell and choose "Barrier" from the context menu. Alternatively, you can left-click
        on the grid cell directly to set a barrier.
      </li>
      <li>
        <strong>Clearing a Cell</strong>: To clear a cell and remove any previous settings (Start,
        Finish, or Barrier), simply left-click on the cell.
      </li>
    </ul>
  </Dialog>
);
