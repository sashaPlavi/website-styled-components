import React from 'react';
import { Button } from '../../globalStyles';

import {
  FooterContainer,
  FooterSubHeading,
  FooterText,
  FooterSubsription,
  Form,
  FormInput,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkTitle,
  FooterLinksItems,
  FooterLink,
} from './Footer.style';

const Footer = () => {
  return (
    <div>
      <FooterContainer>
        <FooterSubsription>
          <FooterSubHeading>
            Join our exclusive membership to recive the last news and trends
          </FooterSubHeading>
          <FooterText>You can unsubcribe at any time</FooterText>
          <Form>
            <FormInput name="email" type="email" placeholder="Your Email" />
            <Button fontBig>Subscribe</Button>
          </Form>
        </FooterSubsription>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinksItems>
              <FooterLinkTitle>About us</FooterLinkTitle>
              <FooterLink to="/sign-up">How It works</FooterLink>
              <FooterLink to="/">Testemonials</FooterLink>
              <FooterLink to="/">Careers</FooterLink>
              <FooterLink to="/">Investors</FooterLink>
              <FooterLink to="/">Terms Of Service</FooterLink>
            </FooterLinksItems>
            <FooterLinksItems>
              <FooterLinkTitle>Contact Us</FooterLinkTitle>
              <FooterLink to="/sign-up">How It works</FooterLink>
              <FooterLink to="/">Testemonials</FooterLink>
              <FooterLink to="/">Careers</FooterLink>
              <FooterLink to="/">Investors</FooterLink>
              <FooterLink to="/">Terms Of Service</FooterLink>
            </FooterLinksItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinksItems>
              <FooterLinkTitle>Videos</FooterLinkTitle>
              <FooterLink to="/sign-up">How It works</FooterLink>
              <FooterLink to="/">Testemonials</FooterLink>
              <FooterLink to="/">Careers</FooterLink>
              <FooterLink to="/">Investors</FooterLink>
              <FooterLink to="/">Terms Of Service</FooterLink>
            </FooterLinksItems>
            <FooterLinksItems>
              <FooterLinkTitle>Social Media</FooterLinkTitle>
              <FooterLink to="/sign-up">How It works</FooterLink>
              <FooterLink to="/">Testemonials</FooterLink>
              <FooterLink to="/">Careers</FooterLink>
              <FooterLink to="/">Investors</FooterLink>
              <FooterLink to="/">Terms Of Service</FooterLink>
            </FooterLinksItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
      </FooterContainer>
    </div>
  );
};

export default Footer;
