import React from "react";
import styled from "styled-components";
import img1 from "../../assets/images/img-5.png";
import img2 from "../../assets/images/img-4.png";
import img3 from "../../assets/images/img-3.png";
import img4 from "../../assets/images/img-2.png";
import img5 from "../../assets/images/img-1.png";
import img6 from "../../assets/images/img.png";
import asset1 from "../../assets/images/asset-15.png";
import asset2 from "../../assets/images/asset-16.png";
import asset3 from "../../assets/images/asset-17.png";
import { ReactComponent as StarSvg } from "../../assets/images/star.svg";

const images = [img1, img2, img3, img4, img5, img6];

const Card = styled.div`
  display: flex;
  width: 80%;
  align-items: center;
  margin: 0 auto;
  border-radius: 20px;
  flex-direction: column;
  color: ${({ theme }) => theme.colors.grey};
  margin-bottom: 25px;
  transition: 0.3s linear;
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034), 0 6.7px 5.3px rgb(0 0 0 / 0%),
    0 12.5px 10px rgba(0, 0, 0, 0.06), 0 22.3px 17.9px rgb(0 0 0 / 0%),
    0 41.8px 33.4px rgb(0 0 0 / 0%), 0 100px 80px rgb(0 0 0 / 0%);
  &:hover {
    transform: scale(1.05);
  }

  ${({ theme }) => theme.mq.sm} {
    width: 45%;
  }
  ${({ theme }) => theme.mq.md} {
    width: 25.5%;
    margin: 0;
    margin-bottom: 30px;
  }
`;

const CardImage = styled.div`
  height: 60%;
  width: 100%;
  position: relative;
  img {
    width: 100%;
    height: 100%;
  }
`;

const CardContent = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  height: 40%;
  padding: 10px;
  ${({ theme }) => theme.mq.md} {
    width: 90%;
  }
`;

const CardContentPrize = styled.p`
  display: block;
  position: absolute;
  text-align: center;
  right: 15px;
  bottom: -10px;
  padding: 5px 5px;
  font-weight: ${({ theme }) => theme.font.weight.bold};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 10px;
  z-index: 1;
  background-color: ${({ theme }) => theme.colors.royalBlue};
  ${({ theme }) => theme.mq.sm} {
    right: 20px;
    bottom: -20px;
    padding: 6px 6px;
  }
`;

const CardContentHeader = styled.p`
  font-weight: ${({ theme }) => theme.font.weight.bold};
  display: block;
  color: ${({ theme }) => theme.colors.black};
  padding: 5px 0;
  width: 100%;
  text-align: left;
`;

const CardContentRating = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 5px 0;
  user-select: none;
  img {
    width: 50%;
  }
`;

const CardContentInformation = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 5px 0;
`;

const InformationItem = styled.div`
  display: flex;
  align-items: center;
  margin: 3px;
  user-select: none;
`;

const LineSeparator = styled.hr`
  display: block;
  width: 100%;
  margin: 5px 0;
  background-color: ${({ theme }) => theme.colors.royalBlue};
`;

const TextParagraph = styled.p`
  display: flex;
  flex: 1;
  font-size: 12px;
  margin-left: 2px;
  align-items: center;
  height: 100%;
`;

const StarsWrapper = styled.div`
  display: inline-block;
`;

const Stars = styled(StarSvg)`
  width: 10px;
  height: 10px;
  margin-right: 3px;
`;

const CoursesCards = () => {
  return (
    <>
      {images.map((image, index) => {
        return (
          <Card key={index}>
            <CardImage>
              <img src={image} alt="Person" />
              <CardContentPrize>$20</CardContentPrize>
            </CardImage>

            <CardContent>
              <CardContentHeader>Application Development</CardContentHeader>

              <CardContentRating>
                <StarsWrapper>
                  <Stars />
                  <Stars />
                  <Stars />
                  <Stars />
                  <Stars />
                </StarsWrapper>
                <TextParagraph>5.0 (2 Rating)</TextParagraph>
              </CardContentRating>

              <LineSeparator />

              <CardContentInformation>
                <InformationItem>
                  <img src={asset1} alt="asset" />
                  <TextParagraph>2246</TextParagraph>
                </InformationItem>
                <InformationItem>
                  <img src={asset2} alt="asset" />
                  <TextParagraph>12h 28m</TextParagraph>
                </InformationItem>
                <InformationItem>
                  <img src={asset3} alt="asset" />{" "}
                  <TextParagraph>Lectures</TextParagraph>
                </InformationItem>
              </CardContentInformation>
            </CardContent>
          </Card>
        );
      })}
    </>
  );
};

export default CoursesCards;
