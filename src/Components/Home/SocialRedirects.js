import React, {Component} from "react";
import LinkButton from "./RedirectButtons/LinkButton";
import styled from 'styled-components';
import CopyButton from "./RedirectButtons/CopyButton";

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
    content: 'Social Links';
  }
`;

class SocialRedirects extends Component {

    render() {

        return (
            <ContainedRedirect className={`defaultGrey`}>
                <CopyButton name="E-Mail Address (Copy)" copyText="info@isaackogan.com" logo="/logos/email.svg"/>
                <LinkButton name="GitHub" href="/github" logo="/logos/github.svg"/>
                <LinkButton name="Spotify" href="/spotify" logo="/logos/spotify.svg"/>
                <LinkButton name="Instagram" href="/instagram" logo="/logos/instagram.svg"/>
                <LinkButton name="Snapchat" href="/snapchat" logo="/logos/snapchat.svg"/>
                <LinkButton name="LinkedIn" href="/linkedin" logo="/logos/linkedin.svg"/>
                <LinkButton name="Reddit" href="/reddit" logo="/logos/reddit.svg"/>
            </ContainedRedirect>
        )
    }
}
export default SocialRedirects;

