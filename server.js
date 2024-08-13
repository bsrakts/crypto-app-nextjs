const pricesWs = new WebSocket(
  "wss://ws.coincap.io/prices?assets=bitcoin,ethereum,monero,litecoin"
);
pricesWs.onmessage = function (msg) {
  console.log(msg.data);
};
