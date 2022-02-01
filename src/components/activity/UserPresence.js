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

const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ImageContainer = styled.div`
  margin-bottom: 12px;
  width: 100px;
  height: 100px;
`;

const TagContainer = styled.span`
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  transition: opacity 100ms;
  
  &:active {
    opacity: 0.5;
  }
  
`;

const Tag = styled.span`
  color: #e8e8e8;
`;

const Discriminator = styled.span`
  color: #b6b6b6;
`;

const ProfileImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 50px;
  z-index: 0;
  background-color: black;
`;


class Status extends Component {

    static #states = {
        "online": "/discord/status/online.svg",
        "idle": "/discord/status/idle.svg",
        "dnd": "/discord/status/dnd.svg",
        "offline": "/discord/status/offline.svg",
        "streaming": "/discord/status/streaming.svg"
    }

    render() {

        return (
            <img alt="" className="statusDot no-select" src={Status.#states[this.props.state || 0] || "online"} />
        )
    }

}

const CustomStatusText = styled.span`
  margin-top: 2px;
`;

class UserPresence extends Component {

    parseData() {
        if (this.props.data.data == null) return null;

        const discordUser = this.props.data.data["discord_user"]
        if (discordUser == null) return null

        const activities = this.props.data.data["activities"]
        let customActivity = null;

        let status = this.props.data.data["discord_status"];

        if (activities != null) {
            for (let activity in activities) {

                if (activities.hasOwnProperty(activity)) {
                    if (activities[activity]["type"] === 1) {
                        status = "streaming";
                    }
                    if (activities[activity]["type"] === 4) {
                        customActivity = activities[activity]["state"]
                    }
                }
            }
        }

        return {
            "cover": `https://cdn.discordapp.com/avatars/${discordUser["id"]}/${discordUser["avatar"]}.png?size=128`,
            "tag": discordUser["username"] || "Unknown",
            "discriminator": discordUser["discriminator"] || "0000",
            "status": status,
            "customActivity": customActivity
        }


    }

    getActivity(data) {
        if (data == null || data["customActivity"] == null) {
            return null;
        }

        return (
            <CustomStatusText className="no-select" >{data["customActivity"]}</CustomStatusText>
        );
    }

    onClick() {

    }

    render() {
        if (this.props.data == null || this.props.data.length < 1) return <div />
        const data = this.parseData();

        // noinspection JSIncompatibleTypesComparison
        if (data === null) return <div />

        return (
            <ButtonItem href={this.props.href} className="no-select">
                <ItemContainer>
                    <ImageContainer>
                        <ProfileImage src={data["cover"]} className="no-select"/>
                        <Status state={data["status"]}/>
                    </ImageContainer>
                    <TagContainer title="Copy Username" onClick={() => {

                        navigator.clipboard.writeText(`${data["tag"]}#${data["discriminator"]}`).then(null)}

                    }>
                        <Tag>{data["tag"]}</Tag><Discriminator>#{data["discriminator"]}</Discriminator>
                    </TagContainer>
                    {this.getActivity(data)}
                </ItemContainer>
            </ButtonItem>
        )
    }

}

export default UserPresence;

