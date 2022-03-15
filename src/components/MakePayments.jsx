import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const MakePayments = () => {
  return (
    <MakePaymentsMasterDiv>
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
      <HeadingList>
        <ListItem>Customer Name</ListItem>
        <ListItem>Booking Id</ListItem>
        <ListItem>Bookings</ListItem>
        <ListItem>Payment Mode</ListItem>
      </HeadingList>
      <PaymentList>
        <ListItem>Manya Surve</ListItem>
        <ListItem>12001200</ListItem>
        <ListItem>
          <Accept>Accept</Accept>
          <Decline>Decline</Decline>
        </ListItem>
        <ListItem>Online Payment</ListItem>
      </PaymentList>
      <PaymentList>
        <ListItem>Manya Surve</ListItem>
        <ListItem>12001200</ListItem>
        <ListItem>
          <Accept>Accept</Accept>
          <Decline>Decline</Decline>
        </ListItem>
        <ListItem>Online Payment</ListItem>
      </PaymentList>
      <PaymentList>
        <ListItem>Manya Surve</ListItem>
        <ListItem>12001200</ListItem>
        <ListItem>
          <Accept>Accept</Accept>
          <Decline>Decline</Decline>
        </ListItem>
        <ListItem>Online Payment</ListItem>
      </PaymentList>
      <PaymentList>
        <ListItem>Manya Surve</ListItem>
        <ListItem>12001200</ListItem>
        <ListItem>
          <Accept>Accept</Accept>
          <Decline>Decline</Decline>
        </ListItem>
        <ListItem>Online Payment</ListItem>
      </PaymentList>
    </MakePaymentsMasterDiv>
  );
};

const MakePaymentsMasterDiv = styled.div``;
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
const HeadingList = styled.div`
  padding: 15px 0 15px 50px;
  font-weight: 600;
  display: flex;
  width: 100%;
  border-bottom: 2px solid #f0f0f0;
`;
const ListItem = styled.div`
  width: 25%;
  text-align: left;
  font-size: 15px;
`;
const PaymentList = styled.div`
  padding: 15px 0 15px 50px;
  display: flex;
  width: 100%;
  border-bottom: 2px solid #f0f0f0;
`;
const Accept = styled.button`
  background-color: #1b5e20;
  color: #ffffff;
  text-transform: uppercase;
  border: none;
  outline: none;
  padding: 1px 2%;
  border-radius: 4px;
  cursor: pointer;
`;
const Decline = styled.button`
  background-color: #d32f2f;
  color: #ffffff;
  text-transform: uppercase;
  border: none;
  outline: none;
  padding: 1px 2%;
  border-radius: 4px;
  cursor: pointer;
  margin-left: 5px;
`;

export default MakePayments;
