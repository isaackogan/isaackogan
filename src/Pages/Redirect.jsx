import React, {Component} from "react";
import styled from 'styled-components';
import Header from "../Components/Header";
import {HomeBackground, HomeContainer} from "./Home";
import Stars from "../Components/Particles";

const RedirectItem = styled.span`
  background-color: var(--secondary);
  border-radius: 0.25rem;
  padding: 1.5rem;
  font-family: Rubik, -apple-system, "Helvetica Neue", Roboto, system-ui, sans-serif;
  margin-top: 100px;
  text-decoration: none;
  outline: 0.5px solid transparent;
  transition: outline-color 200ms;
  word-break: break-all;
  width: 100%;
`;

const LoadRing = styled.div`
  display: inline-block;
  width: 122px;
  height: 122px;
  margin: auto;

  &::before {
    content: " ";
    display: block;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 16px solid var(--tertiary);
    border-color: var(--tertiary) transparent var(--tertiary) transparent;
    animation: lds-dual-ring 1.2s linear infinite;
  }
  
`;

const RedirectPageContainer = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  width: 75%;
  max-width: 900px;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 50%;
  top: 50%;
  position: absolute;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
`;



class Redirect extends Component {

    /**
     * Handle the redirect logic & set page favicon
     */
    componentDidMount() {

        document.getElementById("icon").setAttribute(
            "href", `/logos/${this.props.icon}`
        );

        setTimeout(() => window.location.href = this.props.href, 2500);

    }

    /**
     * Render the redirect page
     * @returns {JSX.Element}
     */
    render() {
        return (
            <HomeContainer style={{minHeight: "100vh"}}>
                <Stars/>
                <Header />
                <HomeBackground style={{height: "100%"}}></HomeBackground>
                <RedirectPageContainer>
                    <LoadRing />
                    <RedirectItem>
                        <h3 className="defaultGrey">
                            Redirecting you to <a className="redirectLink" href={this.props.href}>{this.props.href}</a>
                        </h3>
                    </RedirectItem>
                </RedirectPageContainer>
            </HomeContainer>
        )
    }

}

export default Redirect;
