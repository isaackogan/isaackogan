import React, {Component} from "react";
import styled from 'styled-components';
import {ButtonIcon, ButtonItem, ButtonTitle} from "./LinkButton";


class CopyButton extends Component {

    constructor(props) {
        super(props);
        this.state = {copyActive: false}
    }

    getText() {
        if (this.state.copyActive) {
            return `${this.props.name}... Copied :)`
        }

        return `${this.props.name}`
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

