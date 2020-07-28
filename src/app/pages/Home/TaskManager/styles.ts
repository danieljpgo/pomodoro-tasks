import styled from 'styled-components';

export const Container = styled.div`
  padding: 0 ${(props) => props.theme.unit}px;
`;

export const ListContainer = styled.div`
  display: flex;
`;

export const TitleContainer = styled.div`
  display: grid;
  grid-template-columns: min-content min-content;
  grid-gap: ${(props) => props.theme.unit}px;
  white-space: nowrap;
  margin-bottom: ${(props) => props.theme.unit}px;
`;
