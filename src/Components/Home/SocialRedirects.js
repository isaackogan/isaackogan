import React, {Component} from "react";
import LinkButton from "./RedirectButtons/LinkButton";
import styled from 'styled-components';
import CopyButton from "./RedirectButtons/CopyButton";

const ContainedRedirect = styled.div`
  max-width: 900px;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  color: #d0d0d0;
  font-family: Rubik, -apple-system, "Helvetica Neue", Roboto, system-ui, sans-serif;

`;



const ContainedTitle = styled.div`
  font-size: 25px;
  color: rgba(18, 27, 39, 0.95);
  font-weight: 600;
  transform: rotate(${props => props.rotate}deg);
  margin-top: 15px;
  margin-bottom: 10px;

  padding-top: ${props => props.rotate > 0 ? 9 : 5}px;
  padding-bottom: ${props => props.rotate > 0 ? 1 : 15}px;

  @media (max-width: 750px) {
    padding-top: ${props => props.rotate > 0 ? 4 : 8}px;
    padding-bottom: ${props => props.rotate > 0 ? 4 : 10}px;
  }
`;

class SocialRedirects extends Component {

    constructor(props) {
        super(props);
    }

    getButtonHref(link) {
        if (link.redirected === true || link.redirected == null) {
            let opt = Array.isArray(link.path) ? link.path?.[0] : link.path;
            return opt || link.url;
        }

        return link.url;
    }

    genButtons(buttons = []) {
        for (const link of this.props.links) {

            if (link.disabled) {
                continue;
            }

            if (link.copy) {
               buttons.push(
                   <CopyButton
                       name={link.name}
                       value={link.value.toUpperCase()}
                       logo={`/logos/${link.icon}`}
                       key={`copy-button-${link.name.toLowerCase()}`}
                   />
               )
            }
            else {
                buttons.push(
                    <LinkButton
                        name={link.name}
                        href={this.getButtonHref(link)}
                        logo={`/logos/${link.icon}`}
                        key={`redirect-button-${link.name.toLowerCase()}`}
                        stats={link.stats}
                        data={this.props.stats}
                    />
                )
            }
        }
        return buttons;
    }

    render() {

        return (
            <ContainedRedirect className={`defaultGrey`}>
                <ContainedTitle rotate={this.props.rotate}>{this.props.title}</ContainedTitle>
                {this.genButtons()}
            </ContainedRedirect>
        )
    }
}
export default SocialRedirects;

