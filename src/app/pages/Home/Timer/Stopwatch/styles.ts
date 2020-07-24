import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding:
    0
    ${(props) => props.theme.unit}px
    ${(props) => props.theme.unit * 2}px
    ${(props) => props.theme.unit}px;
`;

export const Content = styled.div`
  position: absolute;
`;
