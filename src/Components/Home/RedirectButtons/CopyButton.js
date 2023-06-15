import React, {Component} from "react";
import styled from 'styled-components';

const ButtonItem = styled.a`
  background-color: rgba(62.73, 76.959, 90.27);
  border-radius: 0.25rem;
  padding: 1.5rem;
  cursor: pointer;
  margin-top: 15px;
  color: inherit;
  
  text-decoration: none;
  outline: 0.5px solid transparent;
  transition: opacity, outline-color 100ms;

  display: flex;
  align-items: center;
  
  &:hover {
    outline-color: rgb(105, 122, 144);
    transition: outline-color 100ms;
  }


`;

const ButtonTitle = styled.span`
  font-size: 20px;
  display: inline-block;
`;

const ButtonIcon = styled.div`
  border-radius: 9999px;
  --tw-bg-opacity: 1;
  background-color: rgba(96.492, 109.211, 122.808, var(--tw-bg-opacity));
  padding: 0.5rem 0.5rem 0.25rem;
  display: inline-block;
  margin-right: 20px;

`;


class CopyButton extends Component {

    constructor(props) {
        super(props);
        this.state = {copyActive: false}
    }

    getText() {
        if (this.state.copyActive) {
            return `${this.props.name} (Copied Item)`
        }

        return `${this.props.name} (Click To Copy)`
    }

    onClick() {
        navigator.clipboard.writeText(this.props.value).then(null);
        this.setState({copyActive: true});


        setTimeout(() => {
            this.setState({copyActive: false});
        }, 1000);
    }
    render() {
        return (
            <ButtonItem
                className="no-select"
                onClick={this.onClick.bind(this)}
                title="Click to Copy"
            >
                <ButtonIcon><img alt="" width="25" height="25" src={this.props.logo}/></ButtonIcon>
                <ButtonTitle>{this.getText()}</ButtonTitle>
            </ButtonItem>
        );
    }

}


export default CopyButton;

