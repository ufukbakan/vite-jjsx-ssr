import { culet } from "@carats/ssr";

export default culet('/trade/:symbol', async (req) => {
  const symbol = req.params.symbol;
  if (!symbol) {
    throw new Error('Symbol is required');
  }
  return {
    symbol: symbol.toUpperCase(),
    price: '$67,234.18',
    change24h: '+2.34%',
    volume: '$28.4B',
    high24h: '$68,102.50',
    low24h: '$65,890.00',
    orderBook: {
      bids: [
        { price: '$67,230.00', size: '1.245' },
        { price: '$67,228.50', size: '0.832' },
        { price: '$67,225.00', size: '3.110' },
        { price: '$67,220.00', size: '2.500' },
        { price: '$67,215.00', size: '0.412' },
      ],
      asks: [
        { price: '$67,235.00', size: '0.921' },
        { price: '$67,238.50', size: '1.550' },
        { price: '$67,240.00', size: '0.678' },
        { price: '$67,245.00', size: '2.300' },
        { price: '$67,250.00', size: '1.100' },
      ],
    },
  };
})
