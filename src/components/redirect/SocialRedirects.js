import React, {Component} from "react";
import RedirectButton from "./RedirectButton";
import styled from 'styled-components';
import CopyButton from "./CopyButton";

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
                <RedirectButton name="GitHub" href="/github" logo="/logos/github.svg"/>
                <RedirectButton name="Spotify" href="/spotify" logo="/logos/spotify.svg"/>
                <RedirectButton name="Instagram" href="/instagram" logo="/logos/instagram.svg"/>
                <RedirectButton name="Snapchat" href="/snapchat" logo="/logos/snapchat.svg"/>
                <RedirectButton name="TikTok" href="/tiktok" logo="/logos/tiktok.svg"/>
                <RedirectButton name="LinkedIn" href="/linkedin" logo="/logos/linkedin.svg"/>
                <RedirectButton name="Reddit" href="/reddit" logo="/logos/reddit.svg"/>
            </ContainedRedirect>
        )
    }
}
export default SocialRedirects;

