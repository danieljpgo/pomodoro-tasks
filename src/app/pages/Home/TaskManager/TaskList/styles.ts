import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-gap: ${(props) => props.theme.unit}px;
`;

export const List = styled.ul`
  display: grid;
  grid-gap: ${(props) => props.theme.unit}px;
`;
