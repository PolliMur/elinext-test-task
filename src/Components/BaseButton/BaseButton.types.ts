import { PropsWithChildren } from 'react';

export type BaseButtonProps = PropsWithChildren<{
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
}>;
