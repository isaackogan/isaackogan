import React, {Component} from 'react';
import GoFundMe from "./GoFundMe";

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = { data: [] };
    }

    render() {

        return (
            <div>
                <GoFundMe />
            </div>
        )
    }

}


export default Home;
