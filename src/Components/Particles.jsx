import {Component} from "react";
import Particles, {initParticlesEngine} from "@tsparticles/react";
import {loadStarsPreset} from "@tsparticles/preset-stars";

export default class Stars extends Component {

    ELEMENT_ID = "tsparticles";
    OPTIONS = {
        preset: "stars",
        fullScreen:
            {
                enable: true,
                zIndex: -1
            },
        background: {
            color: '#0d141e'
        },
        particles: {
            "number": {
                "value": 500,
                "density": {
                    "enable": true,
                    "value_area": 789.1476416322727
                }
            }
        }
    }

    constructor(props) {
        super(props);
        this.state = {init: false};
    }

    async componentDidMount() {
        await initParticlesEngine(async (engine) => {
            await loadStarsPreset(engine);
        });

        this.setState({init: true});
    }

    async particlesLoaded() {
    }

    render() {

        if (this.state.init) {
            return (
                <Particles
                    id={this.ELEMENT_ID}
                    particlesLoaded={this.particlesLoaded.bind(this)}
                    options={this.OPTIONS}
                />
            )
        }

        return <></>

    }
}
