import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import PendingAppointmentCard from "./PendingAppointmentCard";
import axios from "../axios";

const PendingAppointments = ({ user }) => {
  let route = "/getPendingTxns?operatorID=" + user.OperatorID;
  const [pendingAppointments, setPendingAppointments] = useState([]);

  useEffect(() => {
    axios.get("getPendingTxns?operatorID=Operator_1").then((res) => {
      // console.log(res.data);
      setPendingAppointments(res.data);
      // });
    });
  }, []);
  // console.log(pendingAppointments);

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
        <Link to="/makePayments">
          <NavbarButton>Make Payments</NavbarButton>
        </Link>
      </OperatorNavbar>
      {/* RECHECK */}

      <PendingAppointmentCardsDiv>
        {pendingAppointments.map((data) => {
          return <PendingAppointmentCard data={data} />;
        })}
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
