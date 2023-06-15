import React, {Component} from "react";
import styled from "styled-components";
import ActivityItem from "./DiscordActivity/ActivityItem";
import UserPresence from "./DiscordActivity/UserPresence";

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
    content: 'Discord';
  }
  
`;


const ActivityParser = {

    parseSpotify(data) {
        const artistNames = data["artist"].replaceAll(";", ",");

        return {
            "cover": data["album_art_url"] || null,
            "title": "Listening to Spotify",
            "subtitle": data["song"] || "",
            "text1": data["artist"] == null ? "" : "by " + artistNames,
            "text2": data["album"] == null ? "" : "on " + data["album"],
            "url": `https://open.spotify.com/track/${data["track_id"]}`,
            "progress": data["timestamps"] || null
        }

    },

    parseActivity(activityData) {

        if (activityData["type"] === 1) {
            return ActivityParser.parseStream(activityData);
        }

        return {
            "cover": ActivityParser.parseImage(activityData["application_id"], activityData["assets"]),
            "title": ActivityParser.presenceType[activityData["type"] || 0] || "Playing a Game",
            "subtitle": activityData["name"] || "No Name",
            "text1": activityData["details"] || "",
            "text2": activityData["state"] || "",
            "progress": activityData["timestamps"] || null
        }

    },

    parseStream(activityData) {
        let cover = null;
        const twitchName = activityData["assets"]["large_image"].split(":")

        if (twitchName[0] === "twitch") {
            cover = `https://static-cdn.jtvnw.net/previews-ttv/live_user_${twitchName[1]}-1920x1080.jpg`;
        }

        return {
            "cover": cover,
            "title": `Streaming on ${activityData["name"] || "Discord"}`,
            "subtitle": activityData["details"] || "",
            "text1": `Playing ${activityData["state"] || "on Twitch"}`,
            "url": activityData["url"]
        }
    },

    parseImage(appId, assets) {

        if (assets == null || (assets["large_image"] == null && assets["small_image"] == null) || appId == null) {
            return null;
        }

        return `https://cdn.discordapp.com/app-assets/${appId}/${assets["large_image"] || assets["small_image"]}.png`;

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


class DiscordActivity extends Component {

    constructor(props) {
        super(props);
    }

    static parse(data) {
        if (!data.success) return [];
        const rawData = data.data;
        const items = []

        if (rawData["spotify"] != null) {
            items.push(ActivityParser.parseSpotify(rawData["spotify"]))
        }

        for (let activity of rawData["activities"] || []) {

            if (!activity.id.includes("spotify") && activity["type"] !== 4) {
                items.push(ActivityParser.parseActivity(activity));
            }
        }

        return items;
    }

    createActivity (data, i) {
        if (data == null) {
            return <ActivityItem key={i} null="true" />
        }

        return <ActivityItem
            key={i}
            cover={data["cover"] || ""}
            title={data["title"] || ""}
            subtitle={data["subtitle"] || ""}
            text1={data["text1"] || ""}
            text2={data["text2"] || ""}
            url={data["url"] || null}
            progress={data["progress"]}
        />;
    }

    createActivities (dataList) {
        dataList = dataList || [];
        return dataList.map(this.createActivity);
    }

    render() {
        const rawdata = this.props.rawdata;
        const data = rawdata.length === 0 ? null : this.props.data;

        try {
            return (
                <ContainedActivity className={`defaultGrey ${this.props.className}`}>
                    <UserPresence data={rawdata} />
                    {this.createActivities(data)}
                </ContainedActivity>
            )
        } catch (e) {
            console.error(e.stack)
            return <div />
        }

    }
}
export default DiscordActivity;

