import React from "react";
import styled from "styled-components";
import OperatorCTACard from "./OperatorCTACard";

const Operator = () => {
  return (
    <OperatorMaster>
      <OperatorNavbar>
        <NavbarButton>Home</NavbarButton>
        <NavbarButton>Pending appointments</NavbarButton>
        <NavbarButton>Scheduled transfers</NavbarButton>
      </OperatorNavbar>
      <OperatorCTACard
        heading="Check pending appointment status"
        text="See how many customers are willing to update their aadhar"
        buttonContent="View More"
      />
      <OperatorCTACard
        heading="Scheduled bank transfers"
        text="Lorem ipsum dolor sit amet, consectetur
adipiscing elit. Phasellus neque."
        buttonContent="View More"
      />
    </OperatorMaster>
  );
};

const OperatorMaster = styled.div``;
const OperatorNavbar = styled.div`
  width: 100%;
  padding: 10px 75px;
  background-color: #1976d2;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;
const NavbarButton = styled.a`
  text-decoration: none;
  color: #ffffff;
  &:hover {
    cursor: pointer;
    color: #000000;
  }
`;

export default Operator;
