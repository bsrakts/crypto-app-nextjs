export interface CoinData {
  id?: string;
  price: string;
  name: string;
  symbol: string;
  marketValue: string;
  change24h: string;
  priceChange?: number;
  priceHistory?: number[];
  [key: string]: string | number | number[] | undefined;
}

export interface PriceUpdate {
  [key: string]: string;
}
