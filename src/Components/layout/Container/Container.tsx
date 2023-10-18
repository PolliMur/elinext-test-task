import { clsx } from 'helpers/clsx';
import { ContainerProps } from './Container.types';
import classes from './Container.module.scss';

export const Container = ({ className, children }: ContainerProps) => (
  <div className={clsx(classes.container, className)}>{children}</div>
);
