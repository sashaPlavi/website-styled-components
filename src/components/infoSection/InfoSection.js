import React from 'react';
import { InfoSec } from './InfoSection.style';
import { Container } from '../../globalStyles';
import { InfoRow, InfoColumn, TextWrapper } from './InfoSection.style';

const InfoSection = ({ lightBg, imgStart }) => {
  return (
    <div>
      <InfoSec lightBg={lightBg}>
        <Container>
          <InfoRow imgStart={imgStart}>
            <InfoColumn>
              <TextWrapper>yo</TextWrapper>
            </InfoColumn>
          </InfoRow>
        </Container>
      </InfoSec>
    </div>
  );
};

export default InfoSection;
