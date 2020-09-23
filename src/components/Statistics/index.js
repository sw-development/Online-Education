import React from "react";
import styled from "styled-components";
import image1 from "../../assets/images/1.png";
import image2 from "../../assets/images/2.png";
import image3 from "../../assets/images/3.png";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
  ${({ theme }) => theme.mq.md} {
    flex-direction: row;
    width: 85%;
  }
`;
const ImageParagraph = styled.p`
  flex: 1;
  img {
    width: 70%;
  }
  ${({ theme }) => theme.mq.md} {
    width: 100%;
  }
`;

const images = [image1, image2, image3];

const Statisctics = () => {
  return (
    <Wrapper>
      {images.map((image, index) => {
        return (
          <ImageParagraph key={index}>
            <img src={image} alt='image' />
          </ImageParagraph>
        );
      })}
    </Wrapper>
  );
};
export default Statisctics;
