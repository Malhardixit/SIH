import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import PendingAppointmentCard from "./PendingAppointmentCard";

const PendingAppointments = () => {
  return (
    <PendingAppointmentsMaster>
      {/* RECHECK */}
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
      {/* RECHECK */}

      <PendingAppointmentCardsDiv>
        <PendingAppointmentCard />
        <PendingAppointmentCard />
        <PendingAppointmentCard />
      </PendingAppointmentCardsDiv>
    </PendingAppointmentsMaster>
  );
};

const PendingAppointmentsMaster = styled.div``;
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
const PendingAppointmentCardsDiv = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 3%;
`;

export default PendingAppointments;
