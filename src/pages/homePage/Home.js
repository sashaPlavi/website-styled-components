import React from 'react';
import { InfoSection } from '../../components';
import { Container } from '../../globalStyles';

import { HomeObjOne } from './Data';

const Home = () => {
  return (
    <>
      <InfoSection {...HomeObjOne}></InfoSection>
    </>
  );
};

export default Home;
