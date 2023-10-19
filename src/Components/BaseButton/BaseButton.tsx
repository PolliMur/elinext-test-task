import { BaseButtonProps } from './BaseButton.types';
import classes from './BaseButton.module.scss';

export const BaseButton = ({ type, children, onClick }: BaseButtonProps) => (
  <button className={classes.button} type={type} onClick={onClick}>
    {children}
  </button>
);
