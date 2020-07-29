import styled from 'styled-components';

interface PriorityProps {
  type: 'hight' | 'medium' | 'low',
}

export const Container = styled.li`
  display: grid;
  grid-gap: ${(props) => props.theme.unit}px;
  grid-template-columns: min-content auto 48px;
  padding: ${(props) => props.theme.unit}px ${(props) => props.theme.unit * 1.5}px;
  border-radius: ${(props) => props.theme.shapes.borderRadius}px;
  background-color: ${(props) => props.theme.colors.background.constrast};
  align-items: center;
`;

export const Priority = styled.div<PriorityProps>`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: solid 2px ${(props) => props.theme.colors.priority[props.type]};
  background-color: ${(props) => props.theme.colors.priority[props.type]}60;
`;

export const Text = styled.div`
  display: grid;
  grid-gap: ${(props) => props.theme.unit / 4}px;

  div:last-child{
    font-size: ${(props) => props.theme.fontSize.xsmall}px;
    color: ${(props) => props.theme.colors.subtext};
  }
`;

export const Info = styled.div`
  display: grid;
  grid-gap: ${(props) => props.theme.unit / 4}px;
  text-align: end;

  div:last-child{
    font-size: ${(props) => props.theme.fontSize.xsmall}px;
    color: ${(props) => props.theme.colors.subtext};
  }
`;
