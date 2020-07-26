import styled from 'styled-components';

export const Container = styled.div`
  /* @TODO Tornar esse tamanho resposivo */
  width: 100%;
  height: 100%;
  max-width: 300px;
  max-height: 300px;

  background-color: ${(props) => props.theme.colors.background};
  border-radius: 50%;
  filter: drop-shadow(8px 8px 8px #00000080);
  box-shadow: -8px -8px 12px 0px #ffffff10;

  position: relative;

  svg{
    width: 100%;
    padding: ${(props) => props.theme.unit / 2}px;
  }
`;

export const SvgTrack = styled.svg`
  circle{
    stroke: #ffffff10;
    stroke-opacity: 0.5;
    stroke-width: 4.5;
    fill: transparent;
  }
`;

export const SvgBar = styled.svg`
  position: absolute;
  left: 0;
  top: 0;
  transform: rotate(-90deg);
  circle{    
    position: relative;
    box-shadow: -8px -8px 15px 0px #ffffff10;
    stroke: ${(props) => props.theme.colors.primary};
    stroke-width: 4.5;
    fill: transparent;
  }
`;
