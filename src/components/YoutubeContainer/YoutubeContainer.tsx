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
      <YoutubeContainerMain>
        <div>
          <iframe
            className="youtube-vid1"
            //   width="899.418"
            //   height="504.616"
            src="https://www.youtube.com/embed/tgbNymZ7vqY"
          ></iframe>
        </div>
        <div>
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
        </div>
      </YoutubeContainerMain>
    </>
  );
};

export default YoutubeContainer;
