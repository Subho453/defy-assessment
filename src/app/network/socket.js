import socketIOClient from "socket.io-client";

const socket = socketIOClient("https://stg.clubdefy.io/", {
  withCredentials: true,
  transports: ["websocket"],
  path: "/skt",
});

export default socket;
