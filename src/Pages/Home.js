import Header from "../Components/Header";
import {Component} from "react";
import SocialRedirects from "../Components/Home/SocialRedirects";
import "../Resources/index.css";

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = { data: [] };
    }

    updateData() {
        fetch(`https://api.lanyard.rest/v1/users/484491536898326539`, {
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
                <SocialRedirects title={"Social Links"} links={this.props.config['social']}/>
                <SocialRedirects title={"Project Links"} links={this.props.config['project']}/>
            </div>
        )
    }
}

export default Home;
