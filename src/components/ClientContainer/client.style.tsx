import styled from "styled-components";

export const MainClientContainer = styled.div`
  display: flex;
  padding: 60px 0px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 35px;
  /* align-self: stretch; */
  background: #f4f0ec;

  @media (max-width: 768px) {
    flex-direction: column;
    width: auto;
  }
`;

export const InnerClientContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 35px;
  align-self: stretch;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ClientHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  align-self: stretch;
  padding: 54px;
  @media (max-width: 768px) {
  }
`;

export const ClientText = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ClientCard = styled.div`
  /* width: 1092px;
  height: 274px; */
  display: flex;
  justify-content: center;
  flex-direction: row;
  padding: 60px;
  align-items: center;
  background: #fff;
  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

export const ClientImage = styled.div`
  width: 318.443px;
  height: 175px;
  flex-shrink: 0;
`;

// export const MainClientImage = styled.image`
//   width: 100%
//   height: 100%;
// `;

export const ClientTextDiv = styled.div`
  display: flex;
  width: 575px;
  height: 158px;
  gap: 2rem;
  flex-shrink: 0;
  justify-content: left;
  flex-direction: column;
`;
