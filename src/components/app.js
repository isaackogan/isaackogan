import React, {Component} from 'react';
import Header from "./header";
import {Route, Routes} from "react-router-dom";
import RedirectPage from "./redirect/RedirectPage";
import ActivityContainer from "./activity/ActivityContainer";
import SocialRedirects from "./redirect/SocialRedirects";
import ProjectRedirects from "./redirect/ProjectRedirects";
import UnicefDrive from "./ukraine/FundRaiser";



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
                <ActivityContainer rawdata={this.state.data} data={ActivityContainer.parse(this.state.data)}/>
                <SocialRedirects />
                <ProjectRedirects />
            </div>
        )
    }

}


const Main = () => {
    return (
        <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/snapchat' element={<RedirectPage href={"https://www.snapchat.com/add/isaackogan/"} />} />
            <Route exact path='/github' element={<RedirectPage href={"https://github.com/isaackogan"} />} />
            <Route exact path='/linkedin' element={<RedirectPage href={"https://www.linkedin.com/in/isaackogan/"} />} />
            <Route exact path='/instagram' element={<RedirectPage href={"https://www.instagram.com/isaackogan/"} />} />
            <Route exact path='/spotify' element={<RedirectPage href={"https://open.spotify.com/user/djpwnerz/"} />} />
            <Route exact path='/eightball' element={<RedirectPage href={"https://github.com/isaackogan/8-Ball-Magic/"} />} />
            <Route exact path='/chromegle' element={<RedirectPage href={"https://chrome.google.com/webstore/detail/chromegle-omegle-ip-pulle/gcbbaikjfjmidabapdnebofcmconhdbn/"} />} />
            <Route exact path='/mpstatus' element={<RedirectPage href={"https://status.mineplex.club/"} />} />
            <Route exact path='/filehosting' element={<RedirectPage href={"https://cdn.isaackogan.com/"} />} />
            <Route exact path='/panel' element={<RedirectPage href={"https://panel.isaackogan.com/"} />} />
            <Route exact path='/tiktok' element={<RedirectPage href={"https://www.tiktok.com/@6779789250017592326"} />} />
            <Route exact path='/tiktoklive' element={<RedirectPage href={"https://github.com/isaackogan/TikTokLive"} />} />
            <Route exact path="/uadonate" element={<RedirectPage href={"https://www.gofundme.com/f/send-help-to-children-in-ukraine"} />} />
            <Route exact path="/wcidonate" element={<RedirectPage href={"https://www.gofundme.com/f/tvkrsw-ukraine-humanitarian-appeal"} />} />
            <Route exact path="/reddit" element={<RedirectPage href={"https://reddit.com/u/isaackogan"} />} />
            <Route exact path="/printer" element={<RedirectPage href={"https://github.com/isaackogan/TikTokPrinter"} />} />
            <Route exact path="/cufdrive" element={<RedirectPage href={"https://www.instagram.com/p/CbsMHVnLVh_/?utm_source=ig_web_copy_link"} />} />
            <Route exact path="/ujadrive" element={<RedirectPage href={"https://www.ujagenesis.com/lighting-the-way-a-high-school-holiday-project"} />} />}
            <Route exact path="/unicefdrive" element={<UnicefDrive />} />
            <Route exact path="/ukraine" element={<RedirectPage href={"/unicefdrive"} />} />
        </Routes>
    );
}

const App = () => {
    return (
        <div className="App">
            <Header />
            <Main />
        </div>
    );
}


export default App;
