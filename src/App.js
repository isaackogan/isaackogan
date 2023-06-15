import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./Pages/Home";

import Redirect from "./Pages/Redirect";
import Redirects from "./Resources/redirects.json";

/**
 * Generate redirect pages
 * @param redirects Include additional configs
 * @returns {*[]} List of redirect routes
 */
const createRedirects = (redirects = []) => {
    for (const category of Object.keys(Redirects)) {
        for (const entry of Redirects[category]) {
            let paths = Array.isArray(entry.path) ? entry.path : [entry.path];
            for (const path of paths) {
                redirects.push(
                    <Route
                        path={`${path}`}
                        key={`redirect-${path}`}
                        element={<Redirect href={entry.url} icon={entry.icon}/>}
                    />
                )
            }
        }
    }
    return redirects;
}


/**
 * Generate the app element
 * @returns {JSX.Element} React App
 * @constructor N/A
 */
const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='*' element={<Home config={Redirects} />} />
                {createRedirects()}
            </Routes>
        </BrowserRouter>
    );
}

export default App;
