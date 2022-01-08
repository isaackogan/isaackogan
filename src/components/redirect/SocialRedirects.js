import React, {Component} from "react";
import RedirectButton from "./RedirectButton";
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
  }
`;

class SocialRedirects extends Component {

    render() {

        return (
            <ContainedRedirect className={`defaultGrey ${this.props.className}`}>
                <RedirectButton name="LinkedIn" href="/linkedin" logo="/logos/linkedin.svg"/>
                <RedirectButton name="Instagram" href="/instagram" logo="/logos/instagram.svg"/>
                <RedirectButton name="GitHub" href="/github" logo="/logos/github.svg"/>
                <RedirectButton name="Snapchat" href="/snapchat" logo="/logos/snapchat.svg"/>
                <RedirectButton name="Spotify" href="/spotify" logo="/logos/spotify.svg"/>
            </ContainedRedirect>
        )
    }
}
export default SocialRedirects;

