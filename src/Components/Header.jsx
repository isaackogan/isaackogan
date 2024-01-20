import React from "react";
import styled from 'styled-components';

const HeaderBar = styled.header`
  height: 10%;
  background-color: var(--secondary);
  --header-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  box-shadow: var(--header-shadow);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Title = styled.span`
  font-weight: 400;
  font-size: 40px;
  font-family: 'iCiel Gotham', sans-serif;
  transition: color 300ms;
  text-decoration: none;
  padding: 20px;
  color: #f5f5f5;
`;

function Header() {

    return (
        <HeaderBar>
            <Title>Isaac Kogan</Title>
        </HeaderBar>
    )
}

export default Header;
