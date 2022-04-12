/* eslint-disable */
import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";
import Home from "../../app/containers/Home";
import socket from "../../app/network/socket";

let wrapper;

configure({ adapter: new Adapter() });

jest.mock("socket.io-client", () => {
  const emit = jest.fn();
  const on = jest.fn();
  const socket = { emit, on };
  return jest.fn(() => socket);
});

describe("Home", () => {
  beforeEach(() => {
    wrapper = shallow(<Home />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("connect to socket.io server", () => {
    expect(socket).not.toBeNull();
  });

  it("emits the top_gainers_and_losers event", () => {
    wrapper.instance().getTopGainerAndLosers();
    expect(socket.emit).toHaveBeenCalledWith(
      "top_gainers_and_losers",
      JSON.stringify({
        action: "subscribe",
        value: {
          order: "gainers",
        },
      })
    );
  });

  it("listens for the top_gainers_and_losers event", () => {
    expect(socket.on.mock.calls[0][0]).toBe("top_gainers_and_losers");
  });

  it("Appends a coins list to state when message is received by sorting", () => {
    const testData = [
      {
        coin: "Bitcoin",
        pricePercentChange: 0.3,
      },
      {
        coin: "Etheruem",
        pricePercentChange: 2.3,
      },
    ];
    const expected = [
      {
        coin: "Etheruem",
        pricePercentChange: 2.3,
      },
      {
        coin: "Bitcoin",
        pricePercentChange: 0.3,
      },
    ];
    wrapper.instance().messageListener(testData);
    expect(wrapper.state("coinsList")).toEqual(expected);
  });
});
