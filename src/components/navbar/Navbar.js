import React from 'react';
import { Nav, NavbarContainer, NavLogo, NavIcon } from './Navbar.style';
const Navbar = () => {
  return (
    <div>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">
            <NavIcon />
            ULTRA
          </NavLogo>
        </NavbarContainer>
      </Nav>
    </div>
  );
};

export default Navbar;
