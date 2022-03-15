import React from "react";
import styled from "styled-components";
import cardLogo from "../assets/img/cardImg1.png";

const OperatorCTACard = ({ heading, text, buttonContent }) => {
  return (
    <OperatorCTACardMaster>
      <CardIconDiv>
        <CardIcon src={cardLogo}></CardIcon>
      </CardIconDiv>
      <CardTextDiv>
        <CardHeading>{heading}</CardHeading>
        <CardText>{text}</CardText>
        <CardCTAButton>{buttonContent}</CardCTAButton>
      </CardTextDiv>
    </OperatorCTACardMaster>
  );
};

const OperatorCTACardMaster = styled.div`
  background-color: #1976d2;
  padding: 25px 50px;
  display: flex;
  margin: 50px;
  border-radius: 5px;
`;
const CardIconDiv = styled.div`
  width: 150px;
  border: 2px solid red;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const CardIcon = styled.img`
  object-fit: contain;
  height: 50px;
`;
const CardTextDiv = styled.div`
  flex: 1;
  border: 2px solid red;
  padding: 0 25px;
`;
const CardHeading = styled.h3``;

const CardText = styled.p`
  color: #ffffff;
  margin: 5px 0;
  font-size: 14px;
`;
const CardCTAButton = styled.button`
  padding: 5px 25px;
  background-color: #ffffff;
  border: none;
  outline: none;
  border-radius: 2px;
  margin-top: 15px;
`;

export default OperatorCTACard;
