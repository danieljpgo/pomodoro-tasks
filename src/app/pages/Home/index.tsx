import React, { Fragment } from 'react';
import Timer from './Timer';
import Tasks from './Tasks';

const Home: React.FC = () => (
  <Fragment>
    <Timer />
    <Tasks />
  </Fragment>
);

export default Home;
