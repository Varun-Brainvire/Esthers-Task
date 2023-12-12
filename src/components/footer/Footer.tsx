import React from "react";
import {
  BarSeparator,
  FlexDiv,
  FooterLeftSection,
  FooterLink,
  FooterLogoSpanWrapper,
  FooterPara,
  FooterRightSection,
  FooterWrapper,
  LeftSectionDiv,
  LiOfLeftSection,
  MainUlWrapper,
  SocialMediaIndividualDivWrapper,
  SocialMediaLogoWrapperDiv,
  UlOfLeftSection,
  UlWrapperForLestSection,
  WrapperDivForLeftSection,
} from "./footer.styles";
import { Container, Row, Col } from "../../components/index";
import Image from "next/image";
import footerLogo from "../../../public/footer-logo.svg";
import youtube from "../../../public/youtube.svg.svg";
import facebook from "../../../public/fb.svg.svg";
import instagram from "../../../public/instagram.svg.svg";
import linkedin from "../../../public/linkedin.svg.svg";
import Link from "next/link";

const Footer = () => {
  return (
    <FooterWrapper>
      <Container>
        <MainUlWrapper>
          <FooterLeftSection>
            <FooterLogoSpanWrapper>
              <Image src={footerLogo} alt="footerLogo" />
            </FooterLogoSpanWrapper>

            <div>
              <WrapperDivForLeftSection>
                <LeftSectionDiv>
                  <BarSeparator></BarSeparator>
                  <UlWrapperForLestSection>
                    <UlOfLeftSection>
                      <LiOfLeftSection>
                        <FooterLink href={"/inspiration"}>
                          Inspiration
                        </FooterLink>
                      </LiOfLeftSection>
                      <LiOfLeftSection>Contact Us</LiOfLeftSection>
                    </UlOfLeftSection>

                    <UlOfLeftSection marginLeft={true}>
                      <LiOfLeftSection>
                        <FooterLink href={"/howitworks"}>
                          How it works
                        </FooterLink>
                      </LiOfLeftSection>

                      <LiOfLeftSection marginTop={true}></LiOfLeftSection>
                    </UlOfLeftSection>

                    <BarSeparator></BarSeparator>
                  </UlWrapperForLestSection>
                  <FlexDiv>
                    <UlOfLeftSection>
                      <LiOfLeftSection>Cookie policy</LiOfLeftSection>
                      <LiOfLeftSection>Privacy policy</LiOfLeftSection>
                    </UlOfLeftSection>

                    <UlOfLeftSection marginLeft={true}>
                      <LiOfLeftSection>Terms of service</LiOfLeftSection>
                      <LiOfLeftSection marginTop={true}></LiOfLeftSection>
                    </UlOfLeftSection>

                    <BarSeparator></BarSeparator>

                    <UlOfLeftSection>
                      <LiOfLeftSection>Blog</LiOfLeftSection>
                      <LiOfLeftSection marginTop={true}></LiOfLeftSection>
                    </UlOfLeftSection>
                  </FlexDiv>
                </LeftSectionDiv>
              </WrapperDivForLeftSection>
            </div>
          </FooterLeftSection>

          <FooterRightSection>
            <SocialMediaLogoWrapperDiv>
              <SocialMediaIndividualDivWrapper>
                <Image src={youtube} alt="yt" width={25} height={30} />
              </SocialMediaIndividualDivWrapper>

              <SocialMediaIndividualDivWrapper>
                <Image src={facebook} alt="yt" width={20} height={30} />
              </SocialMediaIndividualDivWrapper>

              <SocialMediaIndividualDivWrapper>
                <Image src={linkedin} alt="yt" width={20} height={30} />
              </SocialMediaIndividualDivWrapper>

              <SocialMediaIndividualDivWrapper>
                <Image src={instagram} alt="yt" width={20} height={30} />
              </SocialMediaIndividualDivWrapper>
            </SocialMediaLogoWrapperDiv>
            <div>
              <FooterPara>Esther’s Scandinavia AB ©</FooterPara>
            </div>
          </FooterRightSection>
        </MainUlWrapper>
      </Container>
    </FooterWrapper>
  );
};

export default Footer;
