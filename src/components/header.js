import React from "react";
import styled from 'styled-components';
import "../css/index.css";

const HeaderBar = styled.div`
  height: 10%;
  background-color: rgba(31.008, 40.8, 50.592);
  --header-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  box-shadow: var(--header-shadow);

  display: flex;
  align-items: center;
  justify-content: center;
`;

const Title = styled.a`
  font-weight: 300;
  font-size: 40px;
  font-family: 'iCiel Gotham', sans-serif;
  transition: color 300ms;
  cursor: default;
  text-decoration: none;
  padding: 15px;

  &:hover {
    color: #f5f5f5;
    transition: color 300ms;
  }

`;

function Header() {

    return (
        <HeaderBar>
            <Title className="no-select defaultGrey">Isaac Kogan</Title>
        </HeaderBar>
    )
}

export default Header;
