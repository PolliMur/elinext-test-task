import { Dispatch, PropsWithChildren, SetStateAction } from 'react';

export type DialogProps = PropsWithChildren<{
  title: string;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}>;
