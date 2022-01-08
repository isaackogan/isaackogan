import React from "react";
import styled from 'styled-components';
import SocialRedirects from "./redirect/SocialRedirects";
import ProjectRedirects from "./redirect/ProjectRedirects";
import "../css/index.css";

const Body = styled.div`
`;

function Home() {

    return (
        <Body>
            <SocialRedirects className="socialRedirects"/>
            <ProjectRedirects className="projectRedirects"/>
        </Body>
    )
}

export default Home;