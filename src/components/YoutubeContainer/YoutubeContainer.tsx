import React from "react";
import {
  ChildYoutubeContainer,
  MainYoutubeContainer,
  YoutubeLg,
  YoutubeSm,
} from "./youtubeContainer.style";
import Image from "next/image";
// import { } from "styled-bootstrap-grid";
import { Container, Row, Col } from "..";

interface Props {}

const YoutubeContainer = (props: Props) => {
  return (
    <Container>
      <Row>
        <Col xl={8}>
          <YoutubeLg>
            <iframe
              className="youtube-vid1"
              //   width="899.418"
              //   height="504.616"
              src="https://www.youtube.com/embed/tgbNymZ7vqY"
            ></iframe>
          </YoutubeLg>
        </Col>
        <Col xl={4}>
          <Col xl={4}>
            {" "}
            <iframe
              width="287.755"
              height="161.444"
              src="https://www.youtube.com/embed/tgbNymZ7vqY"
            ></iframe>
          </Col>
          <Col xl={4}>
            {" "}
            <iframe
              width="287.755"
              height="161.444"
              src="https://www.youtube.com/embed/tgbNymZ7vqY"
            ></iframe>
          </Col>
          <Col xl={4}>
            {" "}
            <iframe
              width="287.755"
              height="161.444"
              src="https://www.youtube.com/embed/tgbNymZ7vqY"
            ></iframe>
          </Col>
        </Col>
        {/* <MainYoutubeContainer>
          <ChildYoutubeContainer>
            <div>
              <YoutubeLg>
                <iframe
                  className="youtube-vid1"
                  //   width="899.418"
                  //   height="504.616"
                  src="https://www.youtube.com/embed/tgbNymZ7vqY"
                ></iframe>
              </YoutubeLg>
            </div>
            <div>
              <YoutubeSm>
                <iframe
                  width="287.755"
                  height="161.444"
                  src="https://www.youtube.com/embed/tgbNymZ7vqY"
                ></iframe>
                <iframe
                  width="287.755"
                  height="161.444"
                  src="https://www.youtube.com/embed/tgbNymZ7vqY"
                ></iframe>

                <iframe
                  width="287.755"
                  height="161.444"
                  src="https://www.youtube.com/embed/tgbNymZ7vqY"
                ></iframe>
              </YoutubeSm>
            </div>
          </ChildYoutubeContainer>
        </MainYoutubeContainer> */}
      </Row>
    </Container>
  );
};

export default YoutubeContainer;
