import React, {Component} from "react";
import RedirectButton from "./RedirectButton";
import styled from "styled-components";

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
    content: 'Project Links';

  }
`;

class ProjectRedirects extends Component {

    render() {

        return (
            <ContainedRedirect className={`defaultGrey`}>
                <RedirectButton name="Chromegle" href="/chromegle" logo="/logos/chromegle.svg"/>
                <RedirectButton name="8 Ball Magic" href="/eightball" logo="/logos/eightball.svg"/>
                <RedirectButton name="Mineplex Status" href="/mpstatus" logo="/logos/mpstatus.svg"/>
                <RedirectButton name="File Hosting" href="/filehosting" logo="/logos/filehosting.svg"/>
                <RedirectButton name="Pterodactyl Panel" href="/panel" logo="/logos/panel.svg"/>
                <RedirectButton name="TikTok-Live-Connector" href="/tiktoklive" logo="/logos/tiktok.svg"/>
            </ContainedRedirect>
        )

    }
}
export default ProjectRedirects;

