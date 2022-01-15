import React, {Component} from "react";
import styled from "styled-components";
import ActivityItem from "./ActivityItem";
import UserPresence from "./UserPresence";

const ContainedActivity = styled.div`
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
    content: 'Discord Presence';
  }
  
`;


const ActivityParser = {

    parseSpotify(data) {
        const artistNames = data["artist"].replaceAll(";", ",");

        return {
            "cover": data["album_art_url"] || "/logos/activity.svg",
            "title": "Listening to Spotify",
            "subtitle": data["song"] || "",
            "text1": data["artist"] == null ? "" : "by " + artistNames,
            "text2": data["album"] == null ? "" : "on " + data["album"],
            "url": `https://open.spotify.com/search/${encodeURIComponent(data["song"]) + " " + artistNames}`
    }

    },

    parseImage(appId, assets) {

        if (assets == null || assets["large_image"] == null) {
            return "/logos/activity.svg";
        }

        return `https://cdn.discordapp.com/app-assets/${appId}/${assets["large_image"]}.png`;
    },

    presenceType: {
        0: "Playing a Game",
        1: "Streaming on Discord",
        2: "Listening to Music",
        3: "Watching a Video",
        4: "Doing an Activity",
        5: "In a Competition"
    }

}


class ActivityContainer extends Component {

    constructor(props) {
        super(props);
    }

    static parseActivity(activityData) {

        return {
            "cover": ActivityParser.parseImage(activityData["application_id"], activityData["assets"]),
            "title": ActivityParser.presenceType[activityData["type"] || 0] || "Playing a Game",
            "subtitle": activityData["name"] || "No Name",
            "text1": activityData["details"] || "",
            "text2": activityData["state"] || ""
        }

    }

    static parse(data) {
        if (!data.success) return [];
        const rawData = data.data;
        const items = []

        if (rawData["spotify"] != null) {
            items.push(ActivityParser.parseSpotify(rawData["spotify"]))
        }

        for (let activity of rawData["activities"] || []) {
            if (!activity.id.includes("spotify") && (activity["type"] || 0) !== 4) {
                items.push(ActivityContainer.parseActivity(activity));
            }
        }

        return items;
    }

    createActivity (data, i) {
        return <ActivityItem
            key={i}
            cover={data["cover"]}
            title={data["title"]}
            subtitle={data["subtitle"]}
            text1={data["text1"]}
            text2={data["text2"]}
            url={data["url"]}
        />;
    }

    createActivities (dataList) {
        if (dataList == null) {
            return <div />;
        }

        return dataList.map(this.createActivity);
    }

    render() {
        if (this.props.rawdata == null || this.props.rawdata.length < 1) return <div />

        return (
            <ContainedActivity className={`defaultGrey ${this.props.className}`}>
                <UserPresence data={this.props.rawdata} />
                {this.createActivities(this.props.data)}
            </ContainedActivity>
        )

    }
}
export default ActivityContainer;

