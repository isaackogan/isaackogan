import Header from "../Components/Header";
import {Component} from "react";
import SocialRedirects from "../Components/Home/SocialRedirects";
import "../Resources/index.css";
import styled from "styled-components";

export const HomeContainer = styled.div`
  background-size: cover;
`;

export const HomeBackground = styled.div`
  height: 100%;
  width: 100%;
`;


class Home extends Component {

    static UPDATE_INTERVAL = 10 * 60 * 1000;
    firstMount = true;

    constructor(props) {
        super(props);
        this.state = null;
    }

    async updateData() {

        let newState = {}

        // Chromegle
        try {
            let result = await (await fetch("https://geo.eulerstream.com/users")).json();
            newState.chromegle = result?.["count"];
        } catch (ex) {
        }

        // TikTokLive
        try {
            let result = await (await fetch("https://api.github.com/repos/isaackogan/tiktoklive")).json();
            newState.tiktoklive = result?.["stargazers_count"];
        } catch (ex){

        }

        this.setState(newState);

    }

    async componentDidMount() {

        if (!this.firstMount) {
            return;
        }

        this.firstMount = false;
        await this.updateData();

        setInterval(async () => {
            await this.updateData();
        }, Home.UPDATE_INTERVAL);

    }

    render() {

        return (
            <HomeContainer>
                <Header />
                <HomeBackground>
                    <SocialRedirects title={"Social Media"} rotate={-1} links={this.props.config['social']}/>
                    <SocialRedirects stats={this.state} title={"Projects"} rotate={1} links={this.props.config['project']}/>
                    <div style={{paddingBottom: "30px"}}></div>
                </HomeBackground>
            </HomeContainer>
        )
    }
}

export default Home;
