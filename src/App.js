import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./Pages/Home";
import Redirect from "./Pages/Redirect";

let redirects =  Object.entries(require("./Resources/redirects.json")).map(
    ([path, url]) => <Route path={`${path}`} key={`redirect-${path}`} element={<Redirect href={url}/>} />
);

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<Home />} />
                {redirects}
            </Routes>
        </BrowserRouter>
    );
}

export default App;
