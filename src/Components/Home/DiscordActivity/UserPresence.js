import React, {Component} from "react";
import styled from 'styled-components';
import {parse} from "twemoji-parser";

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

const ProfileImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 50px;
  z-index: 0;
  background-color: rgb(68.73,82.959,95.27);
  border: none;
  
`;

const StatusDot = styled.img`
  position: relative;
  width: 25px;
  height: 25px;
  border-radius: 500px;
  float: right;
  display: inline-block;
  margin-top: -40px;
  margin-right: -10px;
  background-color: rgb(62.73,76.959,90.27);
  border: 6px solid rgb(62.73,76.959,90.27);
`;

const LoadingTag = styled.span`
  font-size: 20px;
  font-weight: bold;
  transition: opacity 100ms;
  border-radius: 25px;
  background-color: rgb(68.73,82.959,95.27);
  color: rgb(68.73,82.959,95.27);
  animation: 500ms ease-out 0s 1 fadein;
`;

const LoadingImage = styled.div`
  width: 100px;
  height: 100px;  
  object-fit: cover;
  border-radius: 50px;
  z-index: 0;
  background-color: rgb(68.73,82.959,95.27);
  animation: 500ms ease-out 0s 1 fadein;
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
                        customActivity = {
                            "text":  activities[activity]["state"],
                            "emoji": activities[activity]["emoji"]
                        }
                    }
                }
            }
        }


        return {
            "cover": (
                discordUser["avatar"] ?
                    `https://cdn.discordapp.com/avatars/${discordUser["id"]}/${discordUser["avatar"]}.png?size=128`
                    : `https://cdn.discordapp.com/embed/avatars/1.png`
            ),
            "tag": discordUser["username"] || "Unknown",
            "status": status,
            "customActivity": customActivity
        }


    }

    getActivity(data) {

        if (data == null || data["customActivity"] == null) {
            return null;
        }

        // Get custom emote
        const emojiConfig = data["customActivity"]["emoji"];
        let customEmote = emojiConfig ? (
            <object draggable="false" className="twemoji" type="image/jpg" data={
                emojiConfig["id"] ? "https://api.isaackogan.com/discord/proxy?url=" + encodeURI(`https://cdn.discordapp.com/emojis/${emojiConfig["id"]}.${emojiConfig["animated"] ? 'gif' : 'png'}`) : (
                    ((parse(emojiConfig["name"].trim()) || [{}])[0])["url"]
                )
            }><img className="twemoji" src={"/discord/activities/noemoji.svg"} alt=""/></object>
        ) : "";

        // Build activity text
        return (
            <span style={{"display": "flex", "alignItems": "center", "marginTop": "6px"}}>
                    {customEmote}
                <span className="no-select">{data["customActivity"]["text"]}</span>
                </span>
        );

    }

    #states = {
        "online": "/discord/status/online.svg",
        "idle": "/discord/status/idle.svg",
        "dnd": "/discord/status/dnd.svg",
        "offline": "/discord/status/offline.svg",
        "streaming": "/discord/status/streaming.svg"
    }

    getProfileImage(data) {
        if (!data || !data["tag"]) {
            return <ImageContainer><LoadingImage /></ImageContainer>
        }

        return (
                <ImageContainer>
                    <ProfileImage src={`https://api.isaackogan.com/discord/proxy?url=${encodeURI(data["cover"])}`} className="no-select" />
                    <StatusDot className="no-select" src={this.#states[data["status"] || "offline"]}/>
                </ImageContainer>
        )
    }

    getTag(data) {
        if (!data || !data["tag"]) {
            return (
                <LoadingTag title="Loading User...">Loading Data...</LoadingTag>
            )
        }

        return (
            <TagContainer title="Copy Username" onClick={() => {navigator.clipboard.writeText(`${data["tag"]}`).then(null)}}>
                <Tag>{data["tag"]}</Tag>
            </TagContainer>
        )

    }

    render() {
        let data = this.parseData() || {};

        return (
                <ButtonItem href={this.props.href} className="no-select">
                    <ItemContainer>
                        {this.getProfileImage(data)}
                        {this.getTag(data)}
                        {this.getActivity(data)}
                    </ItemContainer>
                </ButtonItem>
        )
    }

}

export default UserPresence;

