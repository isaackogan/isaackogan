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
    content: 'Supporting Ukraine';
  }
  
`;


const RedirectButton = styled.div`

  background-color: #041e47;
  text-align: center;
  border-radius: 15px;
  padding-top: 15px;
  padding-bottom: 15px;
  transition: opacity 200ms;
  cursor: pointer;
  
  outline: 0.5px solid transparent;
  transition: outline-color;
  
  &:hover {
    outline-color: rgb(105, 122, 144);
    transition: outline-color;
  }

  max-height: 350px;

`

const FundraisingBannerImage = styled.img`
  max-height: 350px;
`;

function redirect() {
    window.location.href = "/wcidonate";
}


class UkraineRedirects extends Component {
    render() {
        return (
            <ContainedRedirect className={`defaultGrey`} onClick={redirect}>
                <RedirectButton style={{marginTop: "15px"}}>
                    <FundraisingBannerImage className={"no-select"} src="/logos/wcifundraiser.png"/>
                </RedirectButton>
            </ContainedRedirect>
        )
    }
}

export default UkraineRedirects;

