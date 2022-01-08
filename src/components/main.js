import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from "./home";
import RedirectPage from "./redirect/RedirectPage";

const Main = () => {
    return (
        <Routes>
            <Route exact path='/' element={Home()} />
            <Route exact path='/snapchat' element={<RedirectPage href={"https://www.snapchat.com/add/isaackogan/"} />} />
            <Route exact path='/github' element={<RedirectPage href={"https://github.com/isaackogan"} />} />
            <Route exact path='/linkedin' element={<RedirectPage href={"https://www.linkedin.com/in/isaackogan/"} />} />
            <Route exact path='/instagram' element={<RedirectPage href={"https://www.instagram.com/isaackogan/"} />} />
            <Route exact path='/spotify' element={<RedirectPage href={"https://open.spotify.com/user/djpwnerz/"} />} />
            <Route exact path='/eightball' element={<RedirectPage href={"https://github.com/isaackogan/8-Ball-Magic/"} />} />
            <Route exact path='/chromegle' element={<RedirectPage href={"https://chrome.google.com/webstore/detail/chromegle-omegle-ip-pulle/gcbbaikjfjmidabapdnebofcmconhdbn/"} />} />
            <Route exact path='/mpstatus' element={<RedirectPage href={"https://status.mineplex.club/"} />} />

        </Routes>
    );
}
export default Main;