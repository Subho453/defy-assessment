import React, { Component, Suspense } from "react";
import socket from "../../network/socket";
import arrow from "../../../assets/arrow.svg";
import "./index.scss";

const ListCoins = React.lazy(() => import("../../components/ListCoins"));
class Home extends Component {
  state = {
    coinsList: [],
  };

  componentDidMount = async () => {
    this.getTopGainerAndLosers();
  };

  getTopGainerAndLosers = () => {
    socket.emit(
      "top_gainers_and_losers",
      JSON.stringify({
        action: "subscribe",
        value: {
          order: "gainers",
        },
      })
    );
    socket.on("top_gainers_and_losers", (data) => this.messageListener(data));
  };

  messageListener = (data) => {
    this.setState(
      {
        coinsList: data
          .sort((a, b) => b.pricePercentChange - a.pricePercentChange)
          .splice(0, 4),
      }
      // () => socket.close()
    );
  };

  render() {
    const { coinsList } = this.state;
    // console.log(coinsList);
    return (
      <div className="home">
        <div className="flex-container">
          <div className="flex-box left">
            <h1>Hi John,</h1>
            <h3>Complete your KYC</h3>
            <p>
              and experience the world class <br /> bitcoin app defi
            </p>
            <div className="button">
              <span>start kyc</span>
              <img src={arrow} alt="arrow" />
            </div>
          </div>
          <div className="flex-box">
            <Suspense fallback="...Loading">
              <ListCoins title="Ideal for new investors" list={coinsList} />
            </Suspense>
          </div>
        </div>
        <hr />
        <div className="flex-container">
          <div className="flex-box left">
            <Suspense fallback="...Loading">
              <ListCoins title="Trending Coins" list={coinsList} />
            </Suspense>
          </div>
          <div className="flex-box">
            <Suspense fallback="...Loading">
              <ListCoins title="Non trending Coins" list={coinsList} />
            </Suspense>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
