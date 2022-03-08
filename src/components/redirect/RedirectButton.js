import React from "react";
import styled from 'styled-components';
import "../../css/index.css"

const ButtonItem = styled.a`
  background-color: rgba(62.73, 76.959, 90.27);
  border-radius: 0.25rem;
  padding: 1.5rem;
  cursor: pointer;
  margin-top: 15px;
  color: inherit;
  
  text-decoration: none;
  outline: 0.5px solid transparent;
  transition: outline-color 200ms;

  display: flex;
  align-items: center;
  
  &:hover {
    outline-color: rgb(105, 122, 144);
    transition: outline-color 200ms;
  }
    
`;

const ButtonTitle = styled.span`
  font-size: 20px;
  display: inline-block;
`;

const ButtonIcon = styled.div`
  border-radius: 9999px;
  --tw-bg-opacity: 1;
  background-color: rgba(96.492, 109.211, 122.808, var(--tw-bg-opacity));
  padding: 0.5rem 0.5rem 0.25rem;
  display: inline-block;
  margin-right: 20px;
`;

function RedirectButton({name = "Button", href = "#", logo="", target="", style={}}) {
    return (
        <ButtonItem className="no-select" href={href} title="Click to Warp" target={target} style={style}>
            <ButtonIcon><img alt="" width="25" height="25" src={logo}/></ButtonIcon>
            <ButtonTitle>{name}</ButtonTitle>
        </ButtonItem>
    )
}

export default RedirectButton;

