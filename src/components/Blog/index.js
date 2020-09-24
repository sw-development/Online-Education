import React from "react";
import styled from "styled-components";
import Container from "../Container";
import Arrows from "../Arrows";
import BlogCard from "../BlogCard";
import FirstBlogImage from "../../assets/images/img-1.png";
import SecondBlogImage from "../../assets/images/img-2.png";
import ThirdBlogImage from "../../assets/images/img-3.png";

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.solitude};
  padding: 100px 0;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h2`
  position: relative;
  font-size: ${({ theme }) => theme.font.size.sm};
  margin-bottom: 20px;
  &:after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -20px;
    width: 150px;
    height: 5px;
    border-radius: 15px;
    background-color: ${({ theme }) => theme.colors.dodgerBlue};
  }

  ${({ theme }) => theme.mq.md} {
    font-size: ${({ theme }) => theme.font.size.lg};
  }
`;

const BlogCardsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 100px;
  flex-wrap: wrap;

  ${({ theme }) => theme.mq.sm} {
    justify-content: space-between;
  }
`;

const Blog = () => (
  <Wrapper>
    <Container>
      <Header>
        <Title>Our Latest Blog</Title>
        <Arrows />
      </Header>
      <BlogCardsWrapper>
        <BlogCard img={FirstBlogImage} alt="Computer" />
        <BlogCard img={SecondBlogImage} alt="Writing" />
        <BlogCard img={ThirdBlogImage} alt="Girl" />
      </BlogCardsWrapper>
    </Container>
  </Wrapper>
);

export default Blog;
