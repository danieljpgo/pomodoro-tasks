import styled, { css } from 'styled-components';

interface PriorityProps {
  type: 'hight' | 'medium' | 'low',
  completed: boolean,
}

const variants = {
  hight: css`
    border-color: ${(props) => props.theme.colors.priority.hight};
    background-color: ${(props) => props.theme.colors.priority.hight}60;
  `,
  medium: css`
    border-color: ${(props) => props.theme.colors.priority.medium};
    background-color: ${(props) => props.theme.colors.priority.medium}60;
  `,
  low: css`
    border-color: ${(props) => props.theme.colors.priority.low};
    background-color: ${(props) => props.theme.colors.priority.low}60;
  `,
  completed: css`
    border-color: ${(props) => props.theme.colors.complete};
    background-color: ${(props) => props.theme.colors.complete}60;
  `,
};

export const Container = styled.li`
  display: grid;
  grid-gap: ${(props) => props.theme.unit}px;
  grid-template-columns: min-content auto 48px 48px;
  padding: ${(props) => props.theme.unit}px ${(props) => props.theme.unit * 1.5}px;
  border-radius: ${(props) => props.theme.shapes.borderRadius}px;
  background-color: ${(props) => props.theme.colors.background.constrast};
  align-items: center;

  div{
    display: grid;
  }
`;

export const Priority = styled.div<PriorityProps>`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  ${(props) => (props.completed ? variants.completed : variants[props.type])}
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
