import React, { useState } from "react";
import {
  Wrapper,
  FeedbackContainer,
  FeedbackImage,
  FeedbackContent,
  Title,
  Opinion,
  OpinionHeader,
  OpinionAvatar,
  OpinionOwner,
  OpinionOwnerStatus,
  OpinionContent,
  OpinionDescription,
  OpinionFooter,
  OpinionRate,
  StarSvg,
  OpinionArrows,
  ArrowWrapper,
  Arrow,
} from "./feedback.style";

import FeedbackImg from "../../assets/images/feedback.jpg";
import OpinionOwnerImg from "../../assets/images/opinionowner.png";
import Container from "../Container";
import "@brainhubeu/react-carousel/lib/style.css";
import { ReactComponent as ArrowLeftSvg } from "../../assets/images/left-arrow.svg";
import { ReactComponent as ArrowRightSvg } from "../../assets/images/right-arrow.svg";

const Feedback = () => {
  return (
    <Wrapper>
      <Container>
        <FeedbackContainer>
          <FeedbackImage src={FeedbackImg} />

          <FeedbackContent>
            <Title>Students Feedback</Title>
            <Opinion>
              <OpinionHeader>
                <OpinionAvatar src={OpinionOwnerImg} />
                <div>
                  <OpinionOwner>Washington Sundar</OpinionOwner>
                  <OpinionOwnerStatus>Student of E-Learn</OpinionOwnerStatus>
                </div>
              </OpinionHeader>
              <OpinionContent>
                <OpinionDescription>
                  Lorem ipsum dolor sit amet, consecteturei adipiscing elit
                  Nulla elementum sem vel porttitorr ornare nullam ultricies
                  turpis magnai accumsan odiold scelerisque lorem ipsum dolor
                  met id consectetur adipiscing elit. Donec vehicula ex dolor
                  met id consectetur adipiscing elit. Donec vehicula ex orci
                  tempor rutrum. Lorem ipsum dolor sit amet, consecteturei
                  adipiscing elit Nulla elementum sem vel porttitorr ornare
                  nullam ultricies turpis magnai accumsan odiold scelerisque
                  lorem ipsum dolor met id consectetur adipiscing elit. Donec
                  vehicula ex dolor met id consectetur adipiscing elit. Donec
                  vehicula ex orci tempor rutrum.
                </OpinionDescription>
              </OpinionContent>
              <OpinionFooter>
                <OpinionRate>
                  <StarSvg />
                  <StarSvg />
                  <StarSvg />
                  <StarSvg />
                  <StarSvg />
                </OpinionRate>
                <OpinionArrows>
                  <ArrowWrapper>
                    <Arrow as={ArrowLeftSvg} />
                  </ArrowWrapper>
                  <ArrowWrapper>
                    <Arrow as={ArrowRightSvg} />
                  </ArrowWrapper>
                </OpinionArrows>
              </OpinionFooter>
            </Opinion>
          </FeedbackContent>
        </FeedbackContainer>
      </Container>
    </Wrapper>
  );
};

export default Feedback;
