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

            if (link.copy) {
               buttons.push(
                   <CopyButton
                       name={link.name}
                       value={link.value}
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
                    />
                )
            }
        }
        return buttons;
    }

    render() {

        return (
            <ContainedRedirect title={this.props.title} className={`defaultGrey`}>
                {this.genButtons()}
            </ContainedRedirect>
        )
    }
}
export default SocialRedirects;

