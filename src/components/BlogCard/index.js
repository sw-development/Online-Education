import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  border-radius: 15px;
  background-color: ${({ theme }) => theme.colors.white};
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
  color: ${({ theme }) => theme.colors.grey};
  font-size: ${({ theme }) => theme.font.size.xxs};
`;

const Comments = styled.span`
  color: ${({ theme }) => theme.colors.grey};
  font-size: ${({ theme }) => theme.font.size.xxs};
`;

const Title = styled.h3`
  margin: 20px 0;
  font-weight: ${({ theme }) => theme.font.weight.semibold};
  font-size: ${({ theme }) => theme.font.size.sm};
`;

const Link = styled.a`
  font-size: ${({ theme }) => theme.font.size.xxs};
  color: ${({ theme }) => theme.colors.royalBlue};
  text-transform: capitalize;
`;

const BlogCard = ({ img, alt }) => (
  <Wrapper>
    <div>
      <Image src={img} alt={alt} />
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
