import styled from 'styled-components';

export const Container = styled.div`
  /* display: flex; */
  /* justify-content: space-evenly; */
  /* flex-direction: column; */
`;

export const ButtonContainer = styled.div`
  display: grid;
  grid-gap: ${(props) => props.theme.unit}px;
  grid-template-columns: auto auto;
  grid-template-rows: min-content;

  justify-content: center;
`;
