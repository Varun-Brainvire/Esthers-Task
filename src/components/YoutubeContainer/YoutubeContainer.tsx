import React from "react";
import {
  ChildYoutubeContainer,
  MainYoutubeContainer,
  YoutubeLg,
  YoutubeSm,
} from "./YoutubeContainerStyle";
import Image from "next/image";

interface Props {}

const YoutubeContainer = (props: Props) => {
  return (
    <MainYoutubeContainer>
      <ChildYoutubeContainer>
        <div>
          <YoutubeLg>
            <Image
              src="/Images/mobimg.svg"
              width={1000}
              height={340}
              alt="img"
            />
          </YoutubeLg>
        </div>
        <div>
          <YoutubeSm>
            <Image
              src="/Images/mobimg.svg"
              width={100}
              height={140}
              alt="img"
            />
            <Image
              src="/Images/mobimg.svg"
              width={100}
              height={140}
              alt="img"
            />
            <Image
              src="/Images/mobimg.svg"
              width={100}
              height={140}
              alt="img"
            />
          </YoutubeSm>
        </div>
      </ChildYoutubeContainer>
    </MainYoutubeContainer>
  );
};

export default YoutubeContainer;
