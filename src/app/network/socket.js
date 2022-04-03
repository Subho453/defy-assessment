import socketIOClient from "socket.io-client";

const socket = socketIOClient(process.env.REACT_APP_SOCKET_ENDPOINT);
socket.on("connect", () => {
  console.log("connected", socket.connected); // true
});

export default socket;
