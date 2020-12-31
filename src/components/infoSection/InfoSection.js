import React from 'react';
import { Link } from 'react-router-dom';
import { InfoSec } from './InfoSection.style';
import { Container, Button } from '../../globalStyles';
import {
  InfoRow,
  InfoColumn,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  ImgWrapper,
  Img,
} from './InfoSection.style';

const InfoSection = ({
  lightBg,
  imgStart,
  lightText,
  lightTextDesc,
  lightTopLine,
  buttonLabel,
  description,
  headLine,
  img,
  alt,
  start,
  primary,
  topLine,
}) => {
  return (
    <div>
      <InfoSec lightBg={lightBg}>
        <Container>
          <InfoRow imgStart={imgStart}>
            <InfoColumn>
              <TextWrapper>
                <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                <Heading lightText={lightText}>{headLine}</Heading>
                <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
                <Link to="sign-up">
                  <Button big fontBig primary={primary}>
                    {buttonLabel}
                  </Button>
                </Link>
              </TextWrapper>
            </InfoColumn>
            <InfoColumn>
              <ImgWrapper start={start}>
                <Img src={img} alt={alt} />
              </ImgWrapper>
            </InfoColumn>
          </InfoRow>
        </Container>
      </InfoSec>
    </div>
  );
};

export default InfoSection;
