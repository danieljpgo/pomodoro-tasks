import styled from 'styled-components';

export const Container = styled.ul`
  display: grid;
  grid-gap: ${(props) => props.theme.unit}px;
`;
