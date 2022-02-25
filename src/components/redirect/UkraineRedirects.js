import React, {Component} from "react";
import styled from 'styled-components';

const ContainedRedirect = styled.div`
  max-width: 1100px;
  width: 80%;
  margin-left: auto;
  margin-right: auto;

  margin-top: 50px;

  display: flex;
  flex-direction: column;
  
  font-family: Rubik, -apple-system, "Helvetica Neue", Roboto, system-ui, sans-serif;
  
  &:before {
    font-size: 30px;
    font-weight: bold;
    content: 'Support Ukraine';
  }
`;

const ButtonItem = styled.a`
  background-color: rgba(62.73, 76.959, 90.27);
  padding: 1.5rem;
  cursor: pointer;
  color: inherit;
  
  display: flex;
  justify-content: center;

  text-decoration: none;
  outline: 0.5px solid transparent;
  transition: opacity 200ms;

  display: flex;
  align-items: center;

  &:hover {
    opacity: 80%;
    transition: opacity 200ms;
  }

`;

const ButtonIcon = styled.div`
  border-radius: 0.4em;
  --tw-bg-opacity: 1;
  color: #ffffff;
  background-color: rgb(9, 22, 62);
  padding: 0.5rem 0.5rem 0.25rem;
  display: inline-block;
  height: 25px;
  width: 250px;
  text-align: center;
`;

function RedirectButton({name = "Button", href = "#", target="", style={}}) {
    return (
        <ButtonItem className="no-select" href={href} title="Click to Copy" target={target} style={style}>
            <ButtonIcon>{name}</ButtonIcon>
        </ButtonItem>
    )
}

class UkraineRedirects extends Component {

    render() {

        return (
            <ContainedRedirect className={`defaultGrey`}>
                <RedirectButton
                    style={{"backgroundColor": "rgb(16,53,182)", "borderTopRightRadius": "1em", "borderTopLeftRadius": "1em", "marginTop": "15px"}}
                    name="UJA Emergency Relief Fund" href="https://jewishtoronto.com/ukraine-emergency-relief-fund?utm_source=emergency+campaign+&utm_medium=email&utm_campaign=Feb_24_22_Ukraine_Emergency_Community_Email" target="_blank" logo="/logos/tiktok.svg"/>
                <RedirectButton
                    style={{"background": "linear-gradient(to bottom, rgb(16,53,182) 50%, rgb(229,182,11) 50%)", "borderRadius": "0"}}
                    name="UNICEF Emergency Relief Fund" href="https://secure.unicef.ca/page/98630/donate/1?ea.tracking.id=22DIEM02GSE&gclid=CjwKCAiA9tyQBhAIEiwA6tdCrIsYdCP1VgLLZzEfJglNrmd_DpqoQ59l4ZWVpyjJQ4URgXQJ_G3lhhoCsLQQAvD_BwE" target="_blank" logo="/logos/tiktok.svg"/>
                <RedirectButton
                    style={{"backgroundColor": "rgb(229,182,11)", "borderBottomLeftRadius": "1em", "borderBottomRightRadius": "1em"}}
                    name="Stand With Ukraine (ukraine.ua)" href="https://ukraine.ua/news/stand-with-ukraine/" target="_blank" logo="/logos/tiktok.svg"/>
            </ContainedRedirect>
        )
    }
}
export default UkraineRedirects;

