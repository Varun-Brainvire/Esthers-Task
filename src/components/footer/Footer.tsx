import React from "react";
import {
  BarSeparator,
  FlexDiv,
  FooterLeftSection,
  FooterLink,
  FooterLogoSpanWrapper,
  FooterPara,
  FooterParaForMobile,
  FooterRightSection,
  FooterWrapper,
  ImageFlexDivForMobile,
  LeftSectionDiv,
  LiOfLeftSection,
  ListOfMobile,
  MainUlWrapper,
  PaddingWrapper,
  ResponsiveFooter,
  SectionLeftForMobile,
  SectionMain,
  SocialIconWrapperDivForMobile,
  SocialMediaIndividualDivWrapper,
  SocialMediaLogoWrapperDiv,
  UlOfLeftSection,
  UlWrapperForLestSection,
  UlWrapperForMobile,
  WrapperDivForLeftSection,
} from "./footer.styles";
import { Container, Row, Col } from "../../components/index";
import Image from "next/image";
import footerLogo from "../../../public/footer-logo.svg";
import youtube from "../../../public/youtube.svg.svg";
import facebook from "../../../public/fb.svg.svg";
import instagram from "../../../public/instagram.svg.svg";
import linkedin from "../../../public/linkedin.svg.svg";

const Footer = () => {
  return (
    <FooterWrapper screen={true}>
      <PaddingWrapper>
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
      </PaddingWrapper>

      <ResponsiveFooter>
        <SectionMain>
          <SectionLeftForMobile>
            <ImageFlexDivForMobile>
              <Image src={footerLogo} alt="footerLogo" />
            </ImageFlexDivForMobile>
            <div>
              <UlWrapperForMobile>
                <ul>
                  <ListOfMobile>
                    <FooterLink href={"/inspiration"} screen={true}>
                      Inspiration
                    </FooterLink>
                  </ListOfMobile>
                  <ListOfMobile screen={true}>Contact Us</ListOfMobile>
                  <ListOfMobile>
                    <FooterLink href={"/howitworks"} screen={true}>
                      How it works
                    </FooterLink>
                  </ListOfMobile>
                </ul>
                <div>
                  <BarSeparator screen={true}></BarSeparator>
                </div>
                <ul>
                  <ListOfMobile screen={true}>Cookie policy</ListOfMobile>
                  <ListOfMobile screen={true}>Privacy policy</ListOfMobile>
                  <ListOfMobile screen={true}>Terms of service</ListOfMobile>
                </ul>
                <div>
                  <BarSeparator screen={true}></BarSeparator>
                </div>

                <ul>
                  <ListOfMobile screen={true}>Blog</ListOfMobile>
                </ul>
              </UlWrapperForMobile>
              <SocialIconWrapperDivForMobile>
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
              </SocialIconWrapperDivForMobile>
            </div>
            <FooterParaForMobile>
              <FooterPara screen={true}>Esther’s Scandinavia AB ©</FooterPara>
            </FooterParaForMobile>
          </SectionLeftForMobile>
        </SectionMain>
      </ResponsiveFooter>
    </FooterWrapper>
  );
};

export default Footer;
