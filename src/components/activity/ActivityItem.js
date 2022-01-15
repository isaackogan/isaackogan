import React, {Component} from "react";
import styled from 'styled-components';
import "../../css/index.css"

const ButtonItem = styled.a`
  background-color: rgb(62.73, 76.959, 90.27);
  border-radius: 0.25rem;
  padding: 1.0rem 1.0rem 0.9rem;
  cursor: inherit;
  margin-top: 15px;
  color: inherit;

  text-decoration: none;
  outline: 0.5px solid transparent;
  transition: outline-color 200ms;

  display: flex;
  align-items: center;

`;

const CoverImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 10px;
  display: inline-block;
`;

const ItemContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

const TitleContainer = styled.div`
  margin-bottom: 10px;
  font-weight: bold;
  font-size: 15px;
`;

const BodyContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-items: center;
`

const BodyTextContainer = styled.div`
  margin-left: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

class ActivityItem extends Component {

    // TODO cap subtitle, text1, text2 to ~50 chars with ellipses for overflow
    // TODO scale text size based on browser width

    render() {
        return (
            <ButtonItem className="no-select" href={this.props.href}>
                <ItemContainer>
                    <TitleContainer>{this.props.title.toUpperCase()}</TitleContainer>
                    <BodyContainer>
                        <CoverImage src={this.props.cover} className="no-select"/>
                        <BodyTextContainer>
                            <span style={{"fontWeight": "bold"}}>{this.props.subtitle}</span>
                            <span>{this.props.text1}</span>
                            <span>{this.props.text2}</span>
                        </BodyTextContainer>
                    </BodyContainer>
                </ItemContainer>
            </ButtonItem>
        )
    }

}

export default ActivityItem;

