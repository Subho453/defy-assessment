/* eslint-disable prettier/prettier */
import React, { Component } from "react";
import socket from "../../network/socket";

class Home extends Component {
  state = {};

  componentDidMount = async () => {
    socket.emit(
      "top_gainers_and_losers",
      JSON.stringify({
        action: "subscribe",
        value: {
          order: "gainers",
        },
      })
    );
    socket.on("top_gainers_and_losers", (data) => {
      console.log("event", data);
    });
  };

  render() {
    return <div>Home Page</div>;
  }
}

export default Home;
