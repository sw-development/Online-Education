import styled from "styled-components";
import { ReactComponent as Star } from "../../assets/images/star.svg";

export const Wrapper = styled.div`
  padding: 50px 0;
`;

export const FeedbackContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const FeedbackImage = styled.img`
  display: none;

  ${({ theme }) => theme.mq.lg} {
    display: block;
    max-width: 100%;
    height: auto;
    border-radius: 30px;
    object-fit: cover;
  }
`;

export const FeedbackContent = styled.div`
  ${({ theme }) => theme.mq.lg} {
    padding: 25px 0 25px 100px;
    flex: 1 1;
  }
`;

export const Title = styled.h2`
  position: relative;

  font-size: ${({ theme }) => theme.font.size.sm};
  &:after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -20px;
    width: 150px;
    height: 5px;
    border-radius: 15px;
    background-color: #006aff;
  }

  ${({ theme }) => theme.mq.md} {
    font-size: ${({ theme }) => theme.font.size.lg};
  }
`;

export const Opinion = styled.div`
  margin-top: 50px;
`;

export const OpinionHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
`;

export const OpinionAvatar = styled.img`
  width: 75px;
  height: 75px;
  border-radius: 50%;
  margin-right: 15px;
`;

export const OpinionOwner = styled.h4`
  font-weight: bold;
  font-size: ${({ theme }) => theme.font.size.sm};
  margin-bottom: 5px;
`;

export const OpinionOwnerStatus = styled.span`
  font-size: ${({ theme }) => theme.font.size.xs};
`;

export const OpinionContent = styled.div`
  margin-bottom: 25px;
`;

export const OpinionDescription = styled.p`
  font-size: ${({ theme }) => theme.font.size.xs};
  line-height: 2;
`;

export const OpinionFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

export const OpinionRate = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`;

export const StarSvg = styled(Star)`
  width: 25px;
  height: 25px;
  margin-right: 5px;
`;
