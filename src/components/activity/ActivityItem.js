import React, {Component} from "react";
import styled from 'styled-components';
import "../../css/index.css"

const ButtonItem = styled.a`
  background-color: rgb(62.73, 76.959, 90.27);
  border-radius: 0.25rem;
  padding: 1.0rem 1.0rem 0.9rem;
  margin-top: 15px;
  color: inherit;

  text-decoration: none;
  outline: 0.5px solid transparent;
  transition: outline-color 200ms;

  display: flex;
  align-items: center;


`;

const CoverImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 10px;
  display: inline-block;
`;

const ItemContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

const TitleContainer = styled.div`
  margin-bottom: 10px;
  font-weight: bold;
  font-size: 15px;
`;

const BodyContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-items: center;
`

const BodyTextContainer = styled.div`
  margin-left: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;

const ProgressBar = styled.div`
  margin-top: 10px;
  width: 100%;
  background-color: #5e5e5e;
  border-radius: 500px;
`

const FillBar = styled.div`
  width: 1%;
  height: 5px;
  background-color: #ffffff;
  transition: width 1000ms;
  border-radius: 500px;
`

const TimeContainer = styled.div`
  width: 100%;
  max-width: 450px;
`

const TimeData = styled.span`
  font-size: 13px;
  margin-top: 5px;
`

const LoadingCoverImage = styled.div`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 10px;
  display: inline-block;
`;

class ActivityItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            time: Date.now()
        };
    }

    static secondsToTimestamp(s) {
        s = Math.floor(s);
        return s < 60 ? "00:" + ((s > 10) ? s.toString() : '0' + s) : (
            [Math.floor(s / 86400), Math.floor(s / 3600) % 24, Math.floor(s / 60) % 60, s % 60]
                .filter((number, index, array) => !(array.slice(0, index + 1).every((_number) => _number === 0)))
                .map((number, index) => (number > 10 || index === 0) ? number.toString() : '0' + number)
                .join(":")
        );
    }

    componentDidMount() {
        this.interval = setInterval(() => this.setState({ time: Date.now() }), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    getProgressBar() {
        if (this.props.progress == null || !(this.props.progress["end"] && this.props.progress["start"])) return <div/>;

        const songLength = (this.props.progress["end"] - this.props.progress["start"]);
        const timePassed = Math.min((this.state.time - this.props.progress["start"]), songLength);
        const percentCompleted = timePassed / songLength;

        return (
            <TimeContainer>
                <ProgressBar>
                    <FillBar style={{"width": (Math.min(percentCompleted * 100, 100)) + "%"}}/>
                </ProgressBar>
                <div>
                    <TimeData style={{"float": "left"}}>{ActivityItem.secondsToTimestamp(timePassed / 1000)}</TimeData>
                    <TimeData style={{"float": "right"}}>{ActivityItem.secondsToTimestamp(songLength / 1000)}</TimeData>
                </div>
            </TimeContainer>
        )

    }

    getTimeElapsed() {
        if (this.props.progress == null || !this.props.progress["start"] || this.props.progress["end"]) return <div />
        const timePassed = Math.max((this.state.time - this.props.progress["start"]), 0);

        return (
            <span>{ActivityItem.secondsToTimestamp(timePassed)} Elapsed</span>
        )
    }

    render() {

        // Load dummy version
        if (this.props.null || !this.props) {
            return (
                <ButtonItem>
                    <ItemContainer style={{"animation": "500ms ease-out 0s 1 fadein"}}>
                        <TitleContainer style={{"backgroundColor": "rgb(68.73,82.959,95.27)", "color": "rgb(68.73,82.959,95.27)", "width": "150px", "borderRadius": "50px"}}>
                            Loading Data...
                        </TitleContainer>
                        <BodyContainer>
                            <LoadingCoverImage style={{"backgroundColor": "rgb(70.73,82.959,94.27)"}} className="no-select"/>
                        </BodyContainer>
                    </ItemContainer>
                </ButtonItem>
            )
        }

        const classList = ["no-select"]
        if (this.props.url != null) classList.push("linkedActivity")

        return (
            <ButtonItem className={classList} href={this.props.url} target="_blank">
                <ItemContainer>
                    <TitleContainer>{this.props.title.toUpperCase()}</TitleContainer>
                    <BodyContainer>
                        <CoverImage src={this.props.cover || "/discord/activities/notfound.svg"} className="no-select"/>
                        <BodyTextContainer>
                            <span style={{"fontWeight": "bold"}}>{this.props.subtitle}</span>
                            <span>{this.props.text1}</span>
                            <span>{this.props.text2}</span>
                            {this.getProgressBar()}
                            {this.getTimeElapsed()}
                        </BodyTextContainer>
                    </BodyContainer>
                </ItemContainer>
            </ButtonItem>
        )
    }

}

export default ActivityItem;

