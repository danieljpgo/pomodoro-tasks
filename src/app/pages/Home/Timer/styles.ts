import styled from 'styled-components';

export const Container = styled.div`
  padding: 0 ${(props) => props.theme.unit}px;
`;

export const ButtonContainer = styled.div`
  display: grid;
  grid-gap: ${(props) => props.theme.unit}px;
  grid-template-columns: auto auto;
  grid-template-rows: min-content;

  justify-content: center;
`;
