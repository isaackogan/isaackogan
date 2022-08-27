import Header from "../Components/Header";
import {Component} from "react";
import SocialRedirects from "../Components/Home/SocialRedirects";
import ProjectRedirects from "../Components/Home/ProjectRedirects";
import "../Resources/index.css";
import DiscordActivity from "../Components/Home/DiscordActivity";

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = { data: [] };
    }

    updateData() {
        fetch(`https://api.lanyard.rest/v1/users/699802828356583435`, {
            headers: {
                'Access-Control-Allow-Origin':'*'
            }
        })
            .then(res => res.json())
            .then(json => this.setState({ data: json }));
    }

    updateInfinite() {
        this.updateData()
        setTimeout(() => {
            this.updateInfinite();
        }, 10 * 1000);
    }

    componentDidMount() {
        this.updateInfinite()
    }

    render() {

        return (
            <div>
                <Header />
                <DiscordActivity rawdata={this.state.data} data={DiscordActivity.parse(this.state.data)}/>
                <SocialRedirects />
                <ProjectRedirects />
            </div>
        )
    }
}

export default Home;
