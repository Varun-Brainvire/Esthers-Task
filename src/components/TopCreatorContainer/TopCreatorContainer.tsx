import React from "react";
import {
  ImageName,
  InnerCreator,
  MultiImage,
  TopHeader,
  TopImage,
  TopInnerCreator,
  TopMainCreator,
} from "./TopCreatorStyle";
import Image from "next/image";

interface PostDataProps {
  data: { id: number; name: string; image?: string }[];
}
type PropsData = PostDataProps;

// function TopCreatorContainer({}: Props)
const TopCreatorContainer = (props: PropsData) => {
  return (
    <>
      <TopMainCreator>
        <TopInnerCreator>
          <InnerCreator>
            <TopHeader>
              <div>
                <span className="top-creator">Top creators</span>
              </div>
              <div style={{ display: "flex", gap: "10px" }}>
                <Image src="/Images/Frame.svg" width={16} height={16} alt="" />
                <span> Search</span>
                <div style={{ display: "flex", gap: "15px" }}>
                  <div className="arrow">
                    <Image
                      src="/Images/arrow1.svg"
                      width={16}
                      height={16}
                      alt=""
                    />
                  </div>
                  <div className="arrow">
                    <Image
                      src="/Images/arrow2.svg"
                      width={16}
                      height={16}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </TopHeader>

            <TopImage>
              {props.data.map((item: any) => {
                return (
                  <>
                    <MultiImage>
                      <Image src={item.image} height={150} width={150} alt="" />
                    </MultiImage>
                  </>
                );
              })}
            </TopImage>
          </InnerCreator>
        </TopInnerCreator>
      </TopMainCreator>
    </>
  );
};

export default TopCreatorContainer;
