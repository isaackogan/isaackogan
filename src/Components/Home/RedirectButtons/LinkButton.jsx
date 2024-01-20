import React from "react";
import styled from 'styled-components';

export const ButtonItem = styled.a`
  background-color: var(--secondary);
  border-radius: 0.25rem;
  padding: 1.5rem;
  cursor: pointer;
  margin-top: 8px;
  margin-bottom: 8px;
  color: inherit;
  text-decoration: none;
  outline: 0.5px solid transparent;
  transition: outline-color 200ms;
  display: flex;
  align-items: center;
  opacity: 0.85;
  &:hover {
    outline-color: var(--secondary);
    transition: outline-color 200ms;
    opacity: 0.95;
  }
  
  &:active {
    opacity: 1;
  }
  
  

`;

export const ButtonTitle = styled.span`
  font-size: 20px;
  display: inline-block;
  color: #e5eff8;
`;

export const ButtonIcon = styled.div`
  border-radius: 9999px;
  --tw-bg-opacity: 1;
  background: #202c3b;
  padding: 0.5rem 0.5rem 0.25rem;
  display: inline-block;
  margin-right: 20px;
`;

const ExtraLinkText = styled.span`
  animation: 500ms fadein;
`;


function LinkButton(
    {
        name = "Button",
        href = "#",
        logo="",
        target="_blank",
        style={},
        stats = null,
        statsLabel = null,
        data = null
    }
) {

    let extraText = "";

    // Load stats
    if (stats && statsLabel && data) {
        extraText = <ExtraLinkText> ({data[stats]?.toLocaleString()} {statsLabel})</ExtraLinkText>
    }

    return (
        <ButtonItem className="no-select" href={href} title="Click to Warp" target={target} style={style}>
            <ButtonIcon><img alt="" width="25" height="25" src={logo}/></ButtonIcon>
            <ButtonTitle>{name}{extraText}</ButtonTitle>
        </ButtonItem>
    )
}

export default LinkButton;

