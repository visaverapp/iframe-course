import { HTMLAttributes } from 'react';

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  theme?: 'white' | 'black' | 'transparent' | 'red' | 'inline' | 'disabled';
  variant?: 'default' | 'withIcon' | 'outlined';
  width?: string;
  size?: 'big' | 'medium' | 'small';
  type?: 'submit' | 'reset' | 'button';
  disabled?: boolean;
}
