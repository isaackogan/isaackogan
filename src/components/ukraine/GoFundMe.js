import styled from "styled-components";
import {Component} from "react";
import RedirectButton from "../redirect/RedirectButton";

const ContainedRedirect = styled.div`
  max-width: 1100px;
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 50px;
  
  display: flex;
  flex-direction: column;
  
  font-family: Rubik, -apple-system, "Helvetica Neue", Roboto, system-ui, sans-serif;
  color: white;
  
  &:before {
    font-size: 30px;
    font-weight: bold;
    content: 'GoFundMe Campaign';
  }
  
`;

const FundraiserDescription = styled.div`
  background-color: rgba(62.73, 76.959, 90.27);
  border-radius: 0.25rem;
  padding: 1.5rem;
  margin-top: 15px;
  color: inherit;
  
  text-decoration: none;

  display: flex;
  align-items: center;
    
`;

const ExternalURL = styled.a`
  text-decoration: none;
  font-weight: bold;
  color: #4fa3e7;
  line-break: anywhere;
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
                    <RedirectButton name="Visit GoFundMe Page" href="/uadonate" logo="/logos/money.svg"/>
                    <FundraiserDescription style={{
                        "fontSize": "18px",
                        "padding": "0",
                        "paddingLeft": "15%",
                        "paddingRight": "15%",
                        "paddingTop": "10%",
                        "paddingBottom": "10%",
                        "display": "inline-block"
                    }}>
                        <h1 style={{"marginTop": "0px"}}>Raising Money</h1>
                        Through commissioned software development projects, I've organized this <ExternalURL href={"/uadonate"}>GoFundMe</ExternalURL> to serve as a fundraiser for the dire circumstances in Ukraine. Thousands of families are displaced each day as the onslaught in Ukrainian cities continues by the invading Russian forces.
                        <br/><br/>
                        The goal of this fundraiser is to, in small part, help support the country's 7.5 million children by raising money for <ExternalURL target="_blank" href={"https://secure.unicef.ca/page/98630/donate/1"}>UNICEF’s Ukraine Emergency Fund</ExternalURL>.
                        <br/><br/>
                        The money raised through this fundraiser will be matched to further increase its ability to influence the conditions of these ordinary people, people who did nothing to deserve the horrors they are facing.
                        <br/><br/>
                        As paraphrased from the charity's official page:
                        <br/><br/>
                        <div style={{"marginLeft": "15px", "borderLeft": "4px solid white", "paddingLeft": "10px", "borderRadius": "2px", "color": "rgb(240, 240, 240)"}}>
                            Your contribution will help support the response effort to the escalation of the situation in Ukraine by providing communities with safe water, sanitation supplies, urgent medical care, child protection & psychological care, educational supplies.
                        </div>
                        <br/>
                        Please contact me via my socials listed on <ExternalURL target="_blank" href={"https://www.isaackogan.com/"}>https://www.isaackogan.com/</ExternalURL> for additional inquiries. You can check out the development page for this fundraiser at <ExternalURL target="_blank" href={"https://github.com/isaackogan/TikTokLive"}>https://github.com/isaackogan/TikTokLive</ExternalURL>. If you require custom software for your TikTok live streams, don't hesitate to reach out and start a commission. All commissions should be paid directly to this GoFundMe, but PayPal/BTC/ETH remain as alternative options if you cannot use GoFundMe for whatever reason. If you are not looking for a commission but are interested in donating, you are more than welcome to.
                        <br/><br/>
                        There are not a lot of ways that we can help, but, that doesn't mean we shouldn't try.
                        <br/><br/>
                        Isaac

                    </FundraiserDescription>
                </ContainedRedirect>
            </div>
        )
    }

}

export default Home;
