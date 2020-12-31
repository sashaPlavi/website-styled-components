import React from 'react';
import { InfoSection } from '../../components';

import { HomeObjFour, HomeObjOne, HomeObjThre, HomeObjTwo } from './Data';

const Home = () => {
  return (
    <>
      <InfoSection {...HomeObjOne}></InfoSection>
      <InfoSection {...HomeObjTwo}></InfoSection>
      <InfoSection {...HomeObjThre}></InfoSection>
      <InfoSection {...HomeObjFour}></InfoSection>
    </>
  );
};

export default Home;
