import React from "react";
import {
  ChildYoutubeContainer,
  YoutubeContainerMain,
  YoutubeLg,
  YoutubeSm,
} from "./youtubeContainer.style";
import Image from "next/image";
// import { } from "styled-bootstrap-grid";
import { Container, Row, Col } from "..";

interface Props {}

const YoutubeContainer = (props: Props) => {
  return (
    <>
      <>
        <Container>
          <Row>
            <Col xl={8}>
              <iframe
                className="youtube-vid1"
                // width="200"
                // height="200"
                src="https://www.youtube.com/embed/tgbNymZ7vqY"
              ></iframe>
            </Col>
            <Col xl={4}>
              <div>
                <iframe
                  className="youtube-vid1"
                  width="100"
                  height="100"
                  src="https://www.youtube.com/embed/tgbNymZ7vqY"
                ></iframe>
                <iframe
                  className="youtube-vid1"
                  width="100"
                  height="100"
                  src="https://www.youtube.com/embed/tgbNymZ7vqY"
                ></iframe>
                <iframe
                  className="youtube-vid1"
                  width="100"
                  height="100"
                  src="https://www.youtube.com/embed/tgbNymZ7vqY"
                ></iframe>
              </div>
            </Col>
          </Row>
        </Container>

        {/* <div className="yt1">
          <iframe
            className="youtube-vid1"
            //   width="899.418"
            //   height="504.616"
            src="https://www.youtube.com/embed/tgbNymZ7vqY"
          ></iframe>
        </div>
        <div className="yt2">
          <iframe
            width="287.755"
            height="161.444"
            src="https://www.youtube.com/embed/tgbNymZ7vqY"
          ></iframe>
          <div>
            {" "}
            <iframe
              width="287.755"
              height="161.444"
              src="https://www.youtube.com/embed/tgbNymZ7vqY"
            ></iframe>
          </div>
          <div>
            {" "}
            <iframe
              width="287.755"
              height="161.444"
              src="https://www.youtube.com/embed/tgbNymZ7vqY"
            ></iframe>
          </div>
        </div> */}
      </>
    </>
  );
};

export default YoutubeContainer;
