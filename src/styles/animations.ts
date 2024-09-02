import { keyframes } from 'styled-components';

export const spin = keyframes`
  0%{
    transform: rotate(0deg);
  }
  100%{
    transform: rotate(360deg);
  }
`;

export const openModal = keyframes`
  0%{
    /* scale: 0; */
    opacity: 0;
    transform: translateY(50vh);
  }
  100%{
    /* scale: 1; */
    opacity: 1;
    transform: translateY(0);
  }
  `;

export const closeModal = keyframes`
  0%{
    /* scale: 1; */
    opacity: 1;
    transform: translateY(0);
  }
  100%{
    /* scale: 0; */
    opacity: 0;
    transform: translateY(50vh);
  }
`;

export const openOverlay = keyframes`
  0%{
    opacity: 0;
    /* scale: 0; */
    /* transform: translateY(400px); */
  }
  100%{
    /* scale: 1; */
    opacity: 0.8;
    /* transform: translateY(0); */
  }
  `;

export const closeOverlay = keyframes`
  0%{
    /* scale: 1; */
    opacity: 0.8;
    /* transform: translateY(0); */
  }
  100%{
    /* scale: 0; */
    opacity: 0;
    /* transform: translateY(400px); */
  }
`;

export const openPage = keyframes`
  0%{
    opacity: 0;
    /* transform: translateY(-400px); */
  }
  100%{
    opacity: 1;
    /* transform: translateY(0); */
  }
  `;

export const closePage = keyframes`
  0%{
    opacity: 1;
    /* transform: translateY(0); */
  }
  100%{
    opacity: 0;
    /* transform: translateY(-400px); */
  }
`;
