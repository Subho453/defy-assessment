import socketIOClient from "socket.io-client";

const socket = socketIOClient(process.env.REACT_APP_SOCKET_ENDPOINT, {
  withCredentials: true,
  transports: ["websocket"],
  path: "/skt",
});

export default socket;
