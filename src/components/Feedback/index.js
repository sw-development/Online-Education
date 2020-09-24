import React from "react";
import {
  Wrapper,
  FeedbackContainer,
  FeedbackImage,
  FeedbackContent,
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
} from "./feedback.style";
import Title from "../Title";
import Arrows from "../Arrows";
import FeedbackImg from "../../assets/images/feedback.jpg";
import OpinionOwnerImg from "../../assets/images/opinionowner.png";
import Container from "../Container";

const Feedback = () => (
  <Wrapper>
    <Container>
      <FeedbackContainer>
        <FeedbackImage src={FeedbackImg} alt="Boy" />

        <FeedbackContent>
          <Title>Students Feedback</Title>
          <Opinion>
            <OpinionHeader>
              <OpinionAvatar src={OpinionOwnerImg} alt="Boy" />
              <div>
                <OpinionOwner>Washington Sundar</OpinionOwner>
                <OpinionOwnerStatus>Student of E-Learn</OpinionOwnerStatus>
              </div>
            </OpinionHeader>
            <OpinionContent>
              <OpinionDescription>
                Lorem ipsum dolor sit amet, consecteturei adipiscing elit Nulla
                elementum sem vel porttitorr ornare nullam ultricies turpis
                magnai accumsan odiold scelerisque lorem ipsum dolor met id
                consectetur adipiscing elit. Donec vehicula ex dolor met id
                consectetur adipiscing elit. Donec vehicula ex orci tempor
                rutrum. Lorem ipsum dolor sit amet, consecteturei adipiscing
                elit Nulla elementum sem vel porttitorr ornare nullam ultricies
                turpis magnai accumsan odiold scelerisque lorem ipsum dolor met
                id consectetur adipiscing elit. Donec vehicula ex dolor met id
                consectetur adipiscing elit. Donec vehicula ex orci tempor
                rutrum.
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
              <Arrows />
            </OpinionFooter>
          </Opinion>
        </FeedbackContent>
      </FeedbackContainer>
    </Container>
  </Wrapper>
);

export default Feedback;
