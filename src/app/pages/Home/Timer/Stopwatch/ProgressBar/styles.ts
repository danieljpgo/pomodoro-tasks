import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export const Svg = styled.svg`
  height: 100%;
  width: 100%;
  max-width: 300px;
  max-height: 300px;

  circle{
    stroke: #ffffff;
    stroke-opacity: 1;
    stroke-width: 4;
    fill: transparent;
  }

  :last-child{
    circle{
      stroke: ${(props) => props.theme.colors.tertiary};
      stroke-width: 4.3;
    }
  }
`;
