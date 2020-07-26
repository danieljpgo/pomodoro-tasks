import React, { Fragment } from 'react';
import Digit from './Digit';

interface Props{
  timer: number,
}

const Panel: React.FC<Props> = (props) => {
  const { timer } = props;

  const minute = String(Math.trunc(timer / 60)).padStart(2, '0').split('');
  const second = String(timer % 60).padStart(2, '0').split('');

  return (
    <Fragment>
      <Digit value={minute[0]} />
      <Digit value={minute[1]} />
      <div>:</div>
      <Digit value={second[0]} />
      <Digit value={second[1]} />
    </Fragment>
  );
};

Panel.defaultProps = {
  timer: 0,
};

export default Panel;
