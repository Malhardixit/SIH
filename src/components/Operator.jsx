import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import OperatorCTACard from "./OperatorCTACard";

const Operator = () => {
  return (
    <OperatorMaster>
      <OperatorNavbar>
        <Link to="/operator">
          <NavbarButton>Home</NavbarButton>
        </Link>
        <Link to="/pendingAppointments">
          <NavbarButton>Pending appointments</NavbarButton>
        </Link>
        <Link to="/scheduledTransfers">
          <NavbarButton>Scheduled transfers</NavbarButton>
        </Link>
        <Link to="/makePayments">
          <NavbarButton>Make Payments</NavbarButton>
        </Link>
      </OperatorNavbar>

      <OperatorCTACard
        heading="Check pending appointment status"
        text="See how many customers are willing to update their aadhar"
        buttonContent="View More"
        link="/pendingAppointments"
      />
      <OperatorCTACard
        heading="Scheduled bank transfers"
        text="Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Phasellus neque."
        buttonContent="View More"
        link="/scheduledTransfers"
      />
    </OperatorMaster>
  );
};

const OperatorMaster = styled.div``;

export const OperatorNavbar = styled.div`
  width: 100%;
  padding: 10px 75px;
  background-color: #1976d2;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;
const NavbarButton = styled.a`
  color: #ffffff;
  &:hover {
    cursor: pointer;
    color: #000000;
  }
`;

export default Operator;
