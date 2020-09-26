import React from "react";
import styled from "styled-components";

const InputLabel = styled.label`
  position: relative;
  display: block;
  height: 50px;
  width: ${({ lg }) => (lg ? "300px" : "250px")};
  border-radius: 15px;
  background-color: ${({ theme }) => theme.colors.white};
  ${({ visibility }) =>
    visibility ? "box-shadow: 0 20px 52px rgba(0, 74, 180, .14)" : null};
  overflow: hidden;

  ${({ theme }) => theme.mq.md} {
    height: 55px;
  }
`;

const Input = styled.input`
  height: 100%;
  width: 100%;
  padding: 0 50px 0 15px;
  border: none;
  background: none;
  outline: none;
`;

const Button = styled.button`
  position: absolute;
  right: 0;
  height: 100%;
  padding: 0 15px;
  border: none;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.royalBlue};
  outline: none;
  cursor: pointer;
  transition: 0.3s all linear;
`;

const PrimaryButton = ({ placeholder, text, visibility, lg }) => (
  <InputLabel visibility={visibility} lg={lg}>
    <Input placeholder={placeholder} />
    <Button type='button'> {text}</Button>
  </InputLabel>
);

export default PrimaryButton;
