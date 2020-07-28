import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-gap: ${(props) => props.theme.unit}px;
  grid-template-rows: min-content;
  width: 100%;
`;

export const List = styled.ul`
  display: grid;
  grid-gap: ${(props) => props.theme.unit}px;
`;
