import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  border-radius: 15px;
  background-color: #fff;
  max-width: 360px;
  margin-bottom: 25px;
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
`;

const Content = styled.div`
  padding: 25px;
`;

const Date = styled.span`
  margin-right: 15px;
  color: #7d7d7d;
  font-size: ${({ theme }) => theme.font.size.xxs};
`;

const Comments = styled.span`
  color: #7d7d7d;
  font-size: ${({ theme }) => theme.font.size.xxs};
`;

const Title = styled.h4`
  margin: 20px 0;
  font-weight: 600;
  font-size: ${({ theme }) => theme.font.size.sm};
`;

const Link = styled.a`
  font-size: ${({ theme }) => theme.font.size.xxs};
  color: #2575e6;
  text-transform: capitalize;
`;

const BlogCard = ({ img }) => (
  <Wrapper>
    <div>
      <Image src={img} />
    </div>
    <Content>
      <Date>April 22,2020</Date>
      <Comments>4 Comments</Comments>
      <Title>Mauris pretium en tellu nullam dignissim sit amet commodo</Title>
      <Link href="#">read more....</Link>
    </Content>
  </Wrapper>
);

export default BlogCard;
