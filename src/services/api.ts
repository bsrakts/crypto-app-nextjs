import { CoinData } from "..";

const COIN_LIST = [
  "ethereum",
  "usdt",
  "avalanche",
  "bitcoin",
  "tron",
  "chainlink",
  "shib",
  "solana",
  "decentraland",
  "sand",
  "bnb",
];

const COIN_LIST_HISTORY = [
  "ethereum",
  "usdC",
  "avalanche",
  "bitcoin",
  "tron",
  "chainlink",
  "shiba-inu",
  "solana",
  "decentraland",
  "the-sandbox",
  "bnb",
];

/**
 * Matched the CoinList array with CoinList History array using their index.
 *
 * @returns {Promise<Record<string, string>>} A promise that resolves to the initial data of the specified coins.
 */

const coinMapping: Record<string, string> = {};
COIN_LIST.forEach((coin, index) => {
  coinMapping[coin] = COIN_LIST_HISTORY[index];
});

/**
 * Fetches the initial cryptocurrency data for the specified coins.
 *
 * @returns {Promise<Record<string, CoinData>>} A promise that resolves to the initial data of the specified coins.
 */

export async function fetchInitialData(): Promise<Record<string, CoinData>> {
  const response = await fetch("https://api.coincap.io/v2/assets");
  const data = await response.json();

  const initialData: Record<string, CoinData> = {};

  for (const coin of COIN_LIST) {
    const coinData = data.data.find(
      (item: any) => item.id === coin || item.symbol.toLowerCase() === coin
    );

    if (coinData) {
      const historyResponse = await fetch(
        `https://api.coincap.io/v2/assets/${coinMapping[coin]}/history?interval=d1`
      );
      const historyData = await historyResponse.json();

      let priceHistory: number[] = [];
      if (historyData.data && Array.isArray(historyData.data)) {
        priceHistory = historyData.data.map((entry: any) =>
          parseFloat(entry.priceUsd)
        );
      } else {
        console.error(
          `Geçmiş veri bulunamadı: ${coinMapping[coin]} için veri alınamadı.`
        );
      }

      initialData[coin.toLowerCase()] = {
        price: Number(coinData.priceUsd).toFixed(9),
        name: coinData.name,
        symbol: coinData.symbol,
        marketValue: Number(coinData.marketCapUsd),
        change24h: Number(coinData.changePercent24Hr).toFixed(2),
        priceHistory,
      };
    }
  }

  return initialData;
}

/**
 * Establishes a WebSocket connection to receive real-time cryptocurrency prices.
 *
 * @param {function} onMessage - The callback function to handle incoming messages from the WebSocket.
 * @returns {function} A function to close the WebSocket connection.
 */

export const connectToWebSocket = (
  onMessage: (data: Record<string, CoinData>) => void
) => {
  const pricesWs = new WebSocket(
    `wss://ws.coincap.io/prices?assets=${COIN_LIST_HISTORY.join(",")}`
  );

  pricesWs.onmessage = function (msg) {
    const data = JSON.parse(msg.data);
    onMessage(data);
  };

  pricesWs.onclose = function () {
    console.log("WebSocket connection closed");
  };

  return () => {
    pricesWs.close();
  };
};
