import { ButtonProps } from './Button.props';
import { Wrapper, ButtonInnerText } from './Button.styled';

import { forwardRef, memo } from 'react';

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      theme = 'black',
      variant = 'default',
      width = 'auto',
      type = 'button',
      disabled = false,
      className,
      ...props
    },
    ref,
  ) => {
    return (
      <Wrapper
        theme={theme}
        width={width}
        variant={variant}
        type={type}
        disabled={disabled}
        className={className}
        {...props}
        ref={ref}
      >
        <ButtonInnerText>{children}</ButtonInnerText>
      </Wrapper>
    );
  },
);

Button.displayName = 'Button';

export default memo(Button);
