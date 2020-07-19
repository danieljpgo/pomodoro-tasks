import React, { Fragment } from 'react';
import Status from './Status';
import Timer from './Timer';
import Tasks from './Tasks';

const Home: React.FC = () => (
  <Fragment>
    <Status />
    <Timer />
    <Tasks />
  </Fragment>
);

export default Home;
