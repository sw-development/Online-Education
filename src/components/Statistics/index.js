import React from "react";
import styled from "styled-components";
import image1 from "../../assets/images/1.png";
import image2 from "../../assets/images/2.png";
import image3 from "../../assets/images/3.png";
import Container from "../../components/Container/index";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
  ${({ theme }) => theme.mq.md} {
    flex-direction: row;
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
    <Container>
      <Wrapper>
        {images.map((image, index) => {
          return (
            <ImageParagraph key={index}>
              <img src={image} alt="Statisctics" />
            </ImageParagraph>
          );
        })}
      </Wrapper>
    </Container>
  );
};
export default Statisctics;
