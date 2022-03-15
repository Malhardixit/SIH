import React from "react";
import styled from "styled-components";

const PendingAppointmentCard = () => {
  return (
    <PendingAppointmentCardMaster>
      <CardTopDiv>
        <ProfileImg>A</ProfileImg>
        <Name>Aman Gupta</Name>
      </CardTopDiv>
      <CardInfoDiv>
        <p>Appointment Date</p>
        <Date>20/03/2022</Date>
      </CardInfoDiv>
      <ServicesOptedDiv>
        <ServicesOpted>- Documents to be updated</ServicesOpted>
        <ServicesOpted>- Biometric Updates</ServicesOpted>
      </ServicesOptedDiv>
      <CardButton>Enabled</CardButton>
    </PendingAppointmentCardMaster>
  );
};

const PendingAppointmentCardMaster = styled.div`
  width: 30%;
  border: 2px solid red;
  padding: 2% 3%;
  border: 2px solid #909090;
  border-radius: 5px;
  /* min-width: 350px; */
`;
const CardTopDiv = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 25px;
`;
const CardInfoDiv = styled.div``;
const Date = styled.p`
  font-size: 12px;
  color: #49454f;
`;
const ServicesOptedDiv = styled.div`
  margin: 30px 0;
`;
const ServicesOpted = styled.p`
  color: #49454f;
  font-size: 12px;
`;
const CardButton = styled.button`
  padding: 5px 25px;
  background-color: #6750a4;
  border: none;
  outline: none;
  color: #ffffff;
  border-radius: 25px;
`;
const ProfileImg = styled.div`
  background-color: #6750a4;
  border-radius: 20px;
  height: 40px;
  width: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
`;
const Name = styled.h4`
  flex: 1;
  margin-left: 20px;
`;
export default PendingAppointmentCard;
