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
    content: '${props => props.title}';
  }
`;

/*
         <CopyButton name="E-Mail Address (Copy)" copyText="info@isaackogan.com" logo="/logos/email.svg"/>
                <LinkButton name="GitHub" href="/github" logo="/logos/github.svg"/>
                <LinkButton name="Spotify" href="/spotify" logo="/logos/spotify.svg"/>
                <LinkButton name="Instagram" href="/instagram" logo="/logos/instagram.svg"/>
                <LinkButton name="Snapchat" href="/snapchat" logo="/logos/snapchat.svg"/>
                <LinkButton name="LinkedIn" href="/linkedin" logo="/logos/linkedin.svg"/>
                <LinkButton name="Reddit" href="/reddit" logo="/logos/reddit.svg"/>

                <LinkButton name="CA$5,000+ COVID-19 Fundraiser" href="/ujadrive" logo="/logos/covid.svg"/>
                <LinkButton name="CA$2,500+ CA-Ukraine Fundraiser" href="/cufdrive" logo="/logos/ukraine.svg"/>
                <LinkButton name="CA$1,000+ UNICEF Fundraiser" href="/ucfdrive" logo="/logos/child.svg"/>
                <LinkButton name="TikTokLive (Fundraising for The Trevor Project)" href="/tiktoklive" logo="/logos/tiktok.svg"/>
                <LinkButton name="Class Find Tool: Student-Made for YorkU" href="/classfinder" logo="/logos/classfinder.svg"/>
                <LinkButton name="Star Professors: Student-Made for YorkU" href="/starprofessor" logo="/logos/starprofessor.svg"/>
                <LinkButton name="Chromegle - Omegle Automation" href="/chromegle" logo="/logos/chromegle.svg"/>
                <LinkButton name="File Hosting - ShareX CDN Server" href="/filehosting" logo="/logos/filehosting.svg"/>

 */
class SocialRedirects extends Component {

    constructor(props) {
        super(props);
    }

    render() {


        return (
            <ContainedRedirect title={this.props.title} className={`defaultGrey`}>

            </ContainedRedirect>
        )
    }
}
export default SocialRedirects;

