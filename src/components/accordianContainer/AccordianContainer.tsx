import React, { useState } from "react";
import {
  AccordianFirst,
  AccordianHeading,
  AccordianMainContainer,
  InnerAccordian,
} from "./accordian.style";
import { Data } from "@/types";

interface AcoordData {
  isBackground: boolean;
  data: Data[];
}
type PropsData = AcoordData;

const AccordianContainer = (props: PropsData) => {
  const [isActive, setIsActive] = useState(false);
  const [colorActive, setColorActive] = useState(false);

  function ActiveFun() {
    setIsActive(!isActive);
  }

  function colorActiveFun() {
    setColorActive(!colorActive);
  }

  return (
    <>
      <AccordianMainContainer>
        <InnerAccordian>
          <AccordianHeading>Frequently asked questions</AccordianHeading>

          {props.data.map((item: any) => {
            return (
              <>
                <AccordianFirst
                  onClick={() => {
                    ActiveFun();
                    colorActiveFun();
                  }}
                  isBackground={colorActive}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginBottom: "22px",
                    }}
                  >
                    <div className="accordian-title">{item.title}</div>
                    <div style={{ marginRight: "35px" }}>
                      {isActive ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="9"
                          viewBox="0 0 14 9"
                          fill="none"
                        >
                          <path
                            d="M6.99973 0.216309C6.89706 0.216516 6.79547 0.237334 6.70099 0.277529C6.60652 0.317724 6.52107 0.376479 6.44973 0.450309L0.227726 6.85031C0.0816099 7.00231 -3.05484e-07 7.20497 -3.147e-07 7.41581C-3.23916e-07 7.62665 0.0816098 7.82931 0.227726 7.98131C0.29892 8.05535 0.384331 8.11426 0.47884 8.15449C0.573348 8.19473 0.675009 8.21547 0.777726 8.21547C0.880444 8.21547 0.982104 8.19473 1.07661 8.15449C1.17112 8.11426 1.25653 8.05535 1.32773 7.98131L6.99973 2.14731L12.6717 7.98131C12.7429 8.05535 12.8283 8.11426 12.9228 8.15449C13.0173 8.19473 13.119 8.21547 13.2217 8.21547C13.3244 8.21547 13.4261 8.19473 13.5206 8.15449C13.6151 8.11426 13.7005 8.05535 13.7717 7.98131C13.9178 7.82931 13.9995 7.62665 13.9995 7.41581C13.9995 7.20497 13.9178 7.00231 13.7717 6.85031L7.54973 0.450309C7.47838 0.376479 7.39293 0.317724 7.29846 0.277529C7.20398 0.237334 7.1024 0.216516 6.99973 0.216309Z"
                            fill="#3A3A3A"
                          />
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="9"
                          viewBox="0 0 14 9"
                          fill="none"
                        >
                          <path
                            d="M7.00027 8.21594C7.10294 8.21574 7.20453 8.19492 7.29901 8.15472C7.39348 8.11453 7.47893 8.05577 7.55027 7.98194L13.7723 1.58194C13.9184 1.42994 14 1.22728 14 1.01644C14 0.805601 13.9184 0.602943 13.7723 0.450943C13.7011 0.3769 13.6157 0.317994 13.5212 0.277757C13.4267 0.23752 13.325 0.21678 13.2223 0.21678C13.1196 0.21678 13.0179 0.23752 12.9234 0.277757C12.8289 0.317994 12.7435 0.3769 12.6723 0.450943L7.00027 6.28494L1.32827 0.450943C1.25708 0.3769 1.17167 0.317995 1.07716 0.277758C0.982651 0.237521 0.880991 0.21678 0.778273 0.21678C0.675556 0.21678 0.573895 0.237521 0.479387 0.277758C0.384879 0.317995 0.299467 0.3769 0.228273 0.450943C0.0821568 0.602944 0.000547085 0.805601 0.000547094 1.01644C0.000547104 1.22728 0.0821568 1.42994 0.228273 1.58194L6.45027 7.98194C6.52162 8.05577 6.60707 8.11453 6.70154 8.15472C6.79602 8.19492 6.8976 8.21574 7.00027 8.21594Z"
                            fill="#3A3A3A"
                          />
                        </svg>
                      )}
                    </div>
                  </div>

                  {isActive ? (
                    <div className="accordian-content">{item.content}</div>
                  ) : (
                    ""
                  )}
                </AccordianFirst>
              </>
            );
          })}
        </InnerAccordian>
      </AccordianMainContainer>
    </>
  );
};

export default AccordianContainer;
