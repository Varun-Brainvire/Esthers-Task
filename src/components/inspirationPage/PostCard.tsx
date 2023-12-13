import React, { useState, useEffect } from "react";
import {
  SortButton,
  PostCardDiv,
  MainOverlayDiv,
  LikeOverlay,
  LikeButtonDiv,
  BagIconContainer,
  ContentDiv,
  SortButtonDiv,
  LeftContentDiv,
  ContentVisibleDiv,
  PostImage,
  AvtarImage,
  ContentText,
} from "./postcard.styles";
import imageData from "../../../imageData.json";
import { Container, Row, Col } from "../index";

interface PostCardProps {
  selectedCategory: string;
}

const PostCard: React.FC<PostCardProps> = ({ selectedCategory }) => {
  const [overlayVisibility, setOverlayVisibility] = useState<{
    [key: string]: boolean;
  }>({});

  const [isLatest, setIsLatest] = useState(true);
  const [loadedImages, setLoadedImages] = useState(imageData.data);

  const handleToggling = () => {
    setIsLatest((prevIsLatest) => !prevIsLatest);
  };

  const handleMouseEnter = (id: string) => {
    setOverlayVisibility((prev) => ({ ...prev, [id]: true }));
  };

  const handleMouseLeave = (id: string) => {
    setOverlayVisibility((prev) => ({ ...prev, [id]: false }));
  };

  const handleSorting = (a: any, b: any) => {
    if (isLatest) {
      return b.id - a.id; //latest  in desc  order
    } else {
      return a.id - b.id; //oldest in asc order
    }
  };

  useEffect(() => {
    const filteredImages =
      selectedCategory && selectedCategory !== "All"
        ? imageData?.data?.filter(
            (item) =>
              item?.category?.toLowerCase() ===
              selectedCategory?.toLocaleLowerCase()
          )
        : imageData.data;
    const sortedImages = [...filteredImages]?.sort(handleSorting);
    setLoadedImages(sortedImages);
  }, [isLatest, selectedCategory]);

  return (
    <>
      <SortButtonDiv>
        <SortButton onClick={handleToggling}>
          {isLatest ? "Latest" : "Oldest"}
        </SortButton>
      </SortButtonDiv>
      <Container>
        <Row>
          {loadedImages?.map((item) => (
            <Col lg={3} md={6} sm={6} xs={6}>
              <PostCardDiv
                key={item?.id}
                onMouseEnter={() => handleMouseEnter(item.id.toString())}
                onMouseLeave={() => handleMouseLeave(item.id.toString())}
              >
                <PostImage
                  src={item?.imageSrc}
                  alt={item?.description}
                  height={252}
                  width={252}
                />
                <ContentVisibleDiv>
                  <BagIconContainer>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      height="17"
                      viewBox="0 0 17 18"
                      fill="white"
                    >
                      <path
                        d="M4.23136 17.5001C3.34385 17.5151 2.48655 17.1778 1.84722 16.562C1.20788 15.9463 0.838626 15.1023 0.820313 14.2148L0.820312 14.1587L1.88876 4.29361C1.94157 3.86785 2.14996 3.47666 2.47384 3.19531C2.79772 2.91395 3.2142 2.76231 3.64316 2.76956H5.58456C5.74116 2.12268 6.11068 1.54723 6.63374 1.13567C7.15681 0.724121 7.80305 0.500366 8.46861 0.500366C9.13418 0.500366 9.78042 0.724121 10.3035 1.13567C10.8265 1.54723 11.1961 2.12268 11.3527 2.76956H13.2941C13.7232 2.76227 14.1399 2.91385 14.4641 3.19517C14.7882 3.4765 14.997 3.86771 15.0502 4.29361L16.1203 14.1579C16.1217 14.1765 16.1217 14.1953 16.1203 14.214C16.102 15.1019 15.7324 15.9464 15.0926 16.5624C14.4527 17.1784 13.5947 17.5155 12.7067 17.5001H4.23136ZM3.05921 4.41006L1.99416 14.242C2.01305 14.8191 2.25835 15.3656 2.67701 15.7633C3.09567 16.1609 3.65404 16.3778 4.23136 16.367H12.7067C13.2839 16.3778 13.8422 16.1609 14.2608 15.7632C14.6793 15.3655 14.9244 14.819 14.9431 14.242L13.884 4.41006C13.8661 4.26715 13.7959 4.13592 13.687 4.04172C13.578 3.94753 13.4381 3.89706 13.2941 3.90006H3.64316C3.50014 3.89835 3.3615 3.94943 3.25377 4.04352C3.14604 4.1376 3.07677 4.26811 3.05921 4.41006ZM6.80346 2.76956H10.1338C10.0019 2.43544 9.77261 2.14871 9.47565 1.94665C9.17869 1.74458 8.8278 1.63652 8.46861 1.63652C8.10942 1.63652 7.75854 1.74458 7.46158 1.94665C7.16461 2.14871 6.93531 2.43544 6.80346 2.76956ZM5.55481 6.73566C5.56057 6.58498 5.62448 6.44238 5.73312 6.33781C5.84176 6.23324 5.98669 6.17482 6.13749 6.17482C6.28828 6.17482 6.43321 6.23324 6.54186 6.33781C6.6505 6.44238 6.71441 6.58498 6.72016 6.73566C6.73743 7.18771 6.92915 7.6155 7.25508 7.92921C7.58101 8.24293 8.01581 8.41818 8.46819 8.41818C8.92057 8.41818 9.35536 8.24293 9.68129 7.92921C10.0072 7.6155 10.1989 7.18771 10.2162 6.73566C10.222 6.58498 10.2859 6.44238 10.3945 6.33781C10.5032 6.23324 10.6481 6.17482 10.7989 6.17482C10.9497 6.17482 11.0946 6.23324 11.2033 6.33781C11.3119 6.44238 11.3758 6.58498 11.3816 6.73566C11.3704 7.49706 11.0575 8.22291 10.5117 8.7539C9.96592 9.28489 9.23173 9.57762 8.47031 9.56786C8.0929 9.57337 7.7181 9.50448 7.36732 9.36512C7.01654 9.22577 6.69664 9.01867 6.42591 8.75567C6.15517 8.49267 5.93889 8.17891 5.78943 7.83231C5.63997 7.48572 5.56024 7.11307 5.55481 6.73566Z"
                        fill="white"
                      />
                    </svg>
                    <ContentText>{item?.total}</ContentText>
                  </BagIconContainer>
                </ContentVisibleDiv>
                {overlayVisibility[item?.id] && (
                  <MainOverlayDiv>
                    <ContentDiv>
                      <LeftContentDiv>
                        <AvtarImage
                          src={item?.icon}
                          alt="avtaar"
                          height={32}
                          width={32}
                        />
                        <ContentText>{item?.username}</ContentText>
                      </LeftContentDiv>
                    </ContentDiv>
                    <LikeButtonDiv>
                      <LikeOverlay>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="22"
                          height="22"
                          viewBox="0 0 18 22"
                          fill="none"
                        >
                          <path
                            d="M9 17.1875C9 17.1875 1.96875 13.25 1.96875 8.46876C1.96889 7.62369 2.26171 6.80476 2.79741 6.1512C3.33312 5.49763 4.07865 5.04977 4.90724 4.88376C5.73584 4.71775 6.59636 4.84384 7.34249 5.24059C8.08863 5.63734 8.67432 6.28026 9.00001 7.06004C9.32568 6.28026 9.91137 5.63734 10.6575 5.24059C11.4036 4.84384 12.2642 4.71775 13.0928 4.88376C13.9214 5.04977 14.6669 5.49763 15.2026 6.1512C15.7383 6.80476 16.0311 7.62369 16.0312 8.46876C16.0312 13.25 9 17.1875 9 17.1875Z"
                            // stroke="white"
                            stroke-width="1.125"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </LikeOverlay>
                    </LikeButtonDiv>
                  </MainOverlayDiv>
                )}
              </PostCardDiv>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};
export default PostCard;
