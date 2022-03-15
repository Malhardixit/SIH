import React from "react";
import styled from "styled-components";
import uidai from "../assets/img/uidaiImg.png";
import govtOfIndia from "../assets/img/govtOfIndia.jpg";

const Navbar = () => {
  return (
    <NavbarMaster>
      <NavbarLogo src={govtOfIndia} />
      <NavbarLogo src={uidai} />
    </NavbarMaster>
  );
};

const NavbarMaster = styled.div`
  padding: 5px 35px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

const NavbarLogo = styled.img`
  object-fit: contain;
  height: 75px;
`;

export default Navbar;
