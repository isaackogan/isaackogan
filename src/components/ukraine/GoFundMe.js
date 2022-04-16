import styled from "styled-components";
import {Component} from "react";
import RedirectButton from "../redirect/RedirectButton";

const ContainedRedirect = styled.div`
  max-width: 900px;
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 50px;
  
  display: flex;
  flex-direction: column;
  
  font-family: Rubik, -apple-system, "Helvetica Neue", Roboto, system-ui, sans-serif;
  color: white;
  
`;

const FundraiserDescription = styled.div`
  background-color: rgba(62.73, 76.959, 90.27);
  border-radius: 0.25rem;
  padding: 1.5rem;
  margin-top: 15px;
  color: inherit;
  
  text-decoration: none;
  font-size: 18px;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    font-size: 15px;
  }
  
`;

const ExternalURL = styled.a`
  text-decoration: none;
  font-weight: bold;
  color: #4fa3e7;
  line-break: anywhere;
`;

const BannerImageContainer = styled.a`
  width: 100%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  padding-top: 10px;
  padding-bottom: 14px;
  cursor: pointer;
  transition: opacity 300ms;

  &:hover {
    transition: opacity 300ms;
    opacity: 0.8;
  }
    
`;

const BannerImage = styled.img`
  width: 50%;

  @media (max-width: 768px) {
    width: 90%;
  }
  
`;

const BannerTitle = styled.h1`

  @media (max-width: 768px) {
    font-size: 25px;
  }
`;

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = { data: [] };
    }

    render() {

        return (
            <div>
                <ContainedRedirect>
                    <FundraiserDescription style={{
                        "padding": "0",
                        "paddingLeft": "15%",
                        "paddingRight": "15%",
                        "paddingTop": "10%",
                        "paddingBottom": "10%",
                        "display": "inline-block"
                    }}>
                        <BannerTitle style={{"marginTop": "0px"}}>Raised CA$1000 for Ukraine 🎉</BannerTitle>
                        <BannerImageContainer href={"/uadonate"}><BannerImage alt="Fundraiser" src={"/articles/ukraine/banner.png"}/></BannerImageContainer>
                        <br/>
                        <h2 style={{"marginTop": "0px"}}>A Letter from Isaac</h2>
                        When war broke out in Ukraine it was a shot heard around the world. Social media showed us the
                        horrors, the bloodbaths, the sheer devastation caused by the onslaught of the invading Russian forces.
                        <br/><br/>
                        When I first saw this, in spite of feelings of helplessness, I became determined to start a
                        one-man <ExternalURL href={"/uadonate"}>GoFundMe</ExternalURL> charity
                        with the goal of aiding survivors through Humanitarian Relief.
                        <br/><br/>
                        Specifically, I wanted to help support Ukraine's 7.5 million children by raising money for <ExternalURL target="_blank" href={"https://secure.unicef.ca/page/98630/donate/1"}>UNICEF’s Ukraine Emergency Fund</ExternalURL>.
                        <br/><br/>
                        They promised the following for each donation:
                        <br/><br/>
                        <div style={{"marginLeft": "15px", "borderLeft": "4px solid white", "paddingLeft": "10px", "borderRadius": "2px", "color": "rgb(240, 240, 240)"}}>
                            Your contribution will help support the response effort to the escalation of the situation in Ukraine by providing communities with safe water, sanitation supplies, urgent medical care, child protection & psychological care, educational supplies.
                        </div>
                        <br/>
                        I wanted to make it clear to myself and to my peers: anyone is capable of affecting change.
                        Even a kid, a 17yo full-time student without a driver's license. It was a matter of pulling on my strengths in spite of my weaknesses.
                        <br/><br/>
                        Through software development projects, I produced
                        a <ExternalURL target="_blank" href={"https://github.com/isaackogan/TikTokLive/tree/master/examples"}>series of programs</ExternalURL> targeted
                        towards TikTok Creators, allowing them to introduce new avenues of engagement into their livestreams. Using my software, people created everything from
                        chat bots to games in their TikTok LIVE's.
                        <br/><br/>
                        Collecting <strong>35+ donations</strong> over the span of just <strong>1 month</strong>, I raised <strong>CA$1000</strong>.
                        In working with these creators, I got to meet people from all around the world. From Poland to Spain to Mexico I was introduced
                        to unique viewpoints & experiences I had never been exposed to before.
                        <br/><br/>
                        I am so grateful to have been in a position where I could volunteer my time to aide
                        in <ExternalURL target="_blank" href={"https://unfoundation.org/blog/post/the-uns-humanitarian-response-in-ukraine-how-you-can-help/"}>Ukranian Humanitarian Relief</ExternalURL>.
                        I want to continue exploring humanitarian work; I look forward to future fundraising endeavours.
                        <br/><br/>
                        The world can be an awful place and sometimes there aren't a lot of ways that we can help, but this fundraiser taught me a lesson.
                        When something is difficult, and especially when choosing indifference is so much easier, we owe it to ourselves to try.
                        <br/><br/>
                        Regards,
                        <br/>
                        Isaac Kogan
                        <br/><br/>
                        April 15th, 2022
                        <br/><br/>
                    </FundraiserDescription>
                </ContainedRedirect>
            </div>
        )
    }

}

export default Home;
