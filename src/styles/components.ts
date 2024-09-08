import { theme } from './theme';

import styled from 'styled-components';

export const TitleH1 = styled.h1`
  font-weight: 700;
  font-size: 48px;
  line-height: 67px;
`;

export const TitleH2 = styled.h2`
  font-weight: 700;
  font-size: 32px;
  line-height: 45px;
  @media screen and (max-width: 1024px) {
    font-size: 28px;
  }
  @media screen and (max-width: 480px) {
    font-size: 24px;
  }
`;

export const TitleH3 = styled.h3`
  font-weight: 500;
  font-size: 28px;
  line-height: 39px;
  color: ${theme.colors.text.white_100};

  @media (max-width: 1024px) {
    font-size: 24px;
    line-height: 34px;
  }
  @media (max-width: 480px) {
    font-size: 20px;
    line-height: 28px;
  }
`;

export const TitleH4 = styled.h4`
  font-weight: 500;
  font-size: 24px;
  line-height: 34px;
  color: ${theme.colors.text.white_100};

  @media (max-width: 1024px) {
    font-size: 20px;
  }
  @media (max-width: 480px) {
    font-size: 17px;
  }
`;

export const TitleH5 = styled.h5`
  font-weight: 500;
  font-size: 17px;
  line-height: 24px;
  color: ${theme.colors.text.white_100};
`;

export const Text = styled.p`
  font-weight: 300;
  font-size: 20px;
  line-height: 28px;
`;

export const SecondaryText = styled.p`
  font-weight: 300;
  font-size: 17px;
  line-height: 24px;
  color: ${theme.colors.text.white_80};

  @media (max-width: 1028px) {
    font-size: 15px;
  }
  @media (max-width: 480px) {
    font-size: 13px;
  }
`;

export const ButtonText = styled.p`
  font-weight: 700;
  font-size: 17px;
  line-height: 24px;
  text-align: center;
  color: ${theme.colors.text.white_100};
`;

export const LabelText = styled.p`
  font-weight: 400;
  font-size: 17px;
  line-height: 24px;
  color: ${theme.colors.dark_blue};
`;

export const DescriptionText = styled.p`
  font-weight: 400;
  font-size: 15px;
  line-height: 21px;
  color: ${theme.colors.text.white_100};
`;

export const DescriptionQuizText = styled.p`
    font-size: 24px;
    font-weight: 400;
    line-height: 30px;
    text-align: left;
    color: ${theme.colors.text.white_80};

    @media (max-width: 1028px) {
        font-size: 20px;
        line-height: 24px;
    }
    @media (max-width: 480px) {
        font-size: 14px;
        line-height: 16px;
    }
`;

export const StatText = styled.p`
  font-weight: 500;
  font-size: 13px;
  line-height: 18px;
`;

export const FooterText = styled.p`
  font-weight: 500;
  font-size: 13px;
  line-height: 18px;
`;
///-------------------drop-down components----------------------------------------------------------------------------
export const DropDownMenuItem = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 16px;
`;
export const DropDownMenuItemIcon = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

//---------------------------------Select----------------------------------//
export const SelectWrapper = styled.div`
  width: 100%;

  div {
    div {
      &:focus,
      :hover,
      :active {
        outline-color: white;
        border-color: white !important;
      }
    }
  }

  #selectId,
  #selectAccess,
  #selectMyPlaylists,
  #selectAddVideo {
    background-color: transparent !important;

    cursor: pointer;
    .select__placeholder {
      font-weight: 400;
      font-size: 15px;
      line-height: 21px;
      color: ${theme.colors.text.white_30};
    }
    .select__control {
      background-color: transparent;
      border: 2px solid #62548b;
      border-radius: 10px;
    }
    .select__single-value {
      font-weight: 400;
      font-size: 17px;
      line-height: 140%;
      color: ${theme.colors.text.white_30};
    }
    .select__value-container {
      padding: 12px 16px;
    }
    .select__input-container {
      padding: 12px 10px 14px 16px;
    }

    .select__indicator-separator {
      display: none;
    }

    .select__menu {
      background-color: ${theme.colors.blue.blue_25};
      border-radius: 20px;
      z-index: 5;

      div {
        background-color: ${theme.colors.blue.blue_5};
        color: ${theme.colors.text.white_100};
        font-weight: 700;
        font-size: 17px;
        line-height: 140%;

        ::-webkit-scrollbar {
          width: 10px; /* ширина scrollbar */
        }
        ::-webkit-scrollbar-track {
          background: transparent; /* цвет дорожки */
        }
        ::-webkit-scrollbar-thumb {
          border-radius: 20px; /* закругления плашки */
          background-color: ${theme.colors.blue.blue_5}; /* цвет плашки */
        }

        div {
          padding: 15px 10px;
          cursor: pointer;
        }

        :hover {
          background-color: ${theme.colors.blue.blue_dark};
        }
      }
    }
  }
`;

export const CardsList = styled.div`
  position: relative;
  width: 100%;
  display: grid;
  flex-direction: row;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  /* margin-bottom: 80px; */
  list-style: none;
  min-height: 300px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;
//-------------------Pagination-------------------------//

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  position: relative;

  margin-top: 40px;

  .MuiPaginationItem-root {
    color: ${theme.colors.White.white_100};
  }
  .Mui-selected {
    color: ${theme.colors.White.white_100};
    background: #17087b !important;
  }

  .MuiPaginationItem-text {
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    line-height: 24px;

    text-align: center;
    white-space: nowrap;

    color: ${theme.colors.White.white_100};
  }
  @media screen and (max-width: 1024px) {
    margin-top: 30px;
    padding: 3px;
  }
  @media screen and (max-width: 360px) {
    & button {
      margin: 0;
    }
  }
`;
