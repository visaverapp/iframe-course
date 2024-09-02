import { ButtonProps } from './Button.props';

import styled, { css } from 'styled-components';

import { ButtonText, theme } from '@/styles';

export const Wrapper = styled.button<Pick<ButtonProps, 'variant' | 'width' | 'theme'>>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: ${(props) => props.width};

  svg {
    display: block;
  }

  padding: ${(props) => (props.variant === 'withIcon' ? '10px' : '12px 30px')};

  @media screen and (max-width: 480px) {
    padding: ${(props) => (props.variant === 'withIcon' ? '2px' : '6px 15px')};
  }

  border-radius: 10px;
  border-width: 2px;
  border-style: solid;

  /* transition: all 0.3s cubic-bezier(0.39, 0.575, 0.565, 1); */

  ${(props) => {
    if (props.disabled) {
      return css`
        background-color: 'transparent';
        border-color: ${(props) => (props.theme === 'transparent' ? 'transparent' : theme.colors.white.white_10)};
        //color: ${theme.colors.white.white_10};
        cursor: auto;
        & p,
        path {
          color: inherit;
          // stroke: ${theme.colors.blue.blue_25};
        }
      `;
    }
    switch (props.theme) {
      case 'white':
        return css`
          //border-color: ${theme.colors.white.white_100};
          //background-color: ${theme.colors.white.white_100};
          /* &:hover {
               border-color: ${theme.colors.white.white_80};
              background-color: ${theme.colors.white.white_80};
            } */
          &:active {
            //background-color: ${theme.colors.white.white_80};
          }
          & p {
            //color: ${theme.colors.blue.blue_dark};
          }
        `;
      case 'red':
        return css`
          //border-color: ${theme.colors.red.red_light};
          //background-color: ${theme.colors.red.red_light};
          &:active {
            background-color: ${theme.colors.red.red_dark};
          }
          & p {
            color: ${theme.colors.blue.blue_dark};
          }
        `;
      case 'black':
        return css`
          border-color: ${theme.colors.blue.blue_20};
          background-color: ${theme.colors.blue.blue_20};
          &:active {
            background-color: ${theme.colors.blue.blue_5};
          }
          & p {
            color: ${theme.colors.white.white_100};
          }
        `;

      case 'transparent':
        return css`
          border-color: transparent;
          background-color: transparent;
          &:active {
            & p path,
            span {
              color: ${theme.colors.blue.blue_70};
              stroke: ${theme.colors.blue.blue_70};
            }
          }
          & p {
            color: ${theme.colors.white.white_100};
          }
        `;
      case 'inline':
        return css`
          border-color: ${theme.colors.white.white_100};
          background-color: transparent;
          &:active {
            border-color: ${theme.colors.white.white_40};
          }
          & p {
            color: ${theme.colors.white.white_100};
          }
        `;

      default:
        return css`
          border-color: transparent;
          background-color: transparent;
          &:active {
            color: ${theme.colors.blue.blue_70};
            & p {
              color: ${theme.colors.blue.blue_70};
            }
          }
          & p {
            color: ${theme.colors.white.white_100};
          }
        `;
    }
  }}
`;

export const ButtonInnerText = styled(ButtonText)``;
