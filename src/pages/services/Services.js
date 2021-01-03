import React from 'react';
import { InfoSection } from '../../components';

import { HomeObjThre, HomeObjTwo } from './Data';

const Services = () => {
  return (
    <>
      <InfoSection {...HomeObjTwo}></InfoSection>
      <InfoSection {...HomeObjThre}></InfoSection>
    </>
  );
};

export default Services;
