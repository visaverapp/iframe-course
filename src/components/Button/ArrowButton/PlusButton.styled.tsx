
import styled from 'styled-components';
import Button from "@/components/Button/Button";

export const Wrapper = styled(Button)`
  width: 42px;
  height: 42px;
  z-index: 5;

  border-radius: 4px;
  background: hsla(0, 0%, 100%, 0.8);
  border: transparent;
  /* opacity: 0.8; */

  transition: all 0.3s ease;

  &:hover {
    background: hsla(0, 0%, 100%, 0.9);
  }
  &:active {
    background: hsla(0, 0%, 100%, 1.5);
    opacity: 1;
    scale: 0.9;
  }
  &:before {
    content: none;
  }
`;
