import React from 'react';
import { InfoSection } from '../../components';

import { HomeObjFour, HomeObjThre, HomeObjTwo } from './Data';

const Products = () => {
  return (
    <>
      <InfoSection {...HomeObjThre}></InfoSection>
      <InfoSection {...HomeObjFour}></InfoSection>
    </>
  );
};

export default Products;
