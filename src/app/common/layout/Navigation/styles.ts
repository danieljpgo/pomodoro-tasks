import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
`;

export const Main = styled.main`
  height: calc(100% - 60px);
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 60vh;
  grid-gap: ${(props) => props.theme.unit}px;
  align-content: center;
`;
