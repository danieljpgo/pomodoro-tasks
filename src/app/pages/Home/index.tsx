import React, { Fragment } from 'react';
import Timer from './Timer';
import Manager from './Manager';

const Home: React.FC = () => (
  <Fragment>
    <Timer />
    <Manager />
  </Fragment>
);

export default Home;
