import React from "react";
import {
  ChildYoutubeContainer,
  MainYoutubeContainer,
  YoutubeLg,
  YoutubeSm,
} from "./YoutubeContainerStyle";
import Image from "next/image";
import { Container, Row } from "styled-bootstrap-grid";

interface Props {}

const YoutubeContainer = (props: Props) => {
  return (
    <Container>
      <Row>
        <MainYoutubeContainer>
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
        </MainYoutubeContainer>
      </Row>
    </Container>
  );
};

export default YoutubeContainer;
