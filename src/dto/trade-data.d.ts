interface TradeData {
  symbol: string
  price: string
  change24h: string
  volume: string
  high24h: string
  low24h: string
  orderBook: {
    bids: { price: string; size: string }[]
    asks: { price: string; size: string }[]
  }
}