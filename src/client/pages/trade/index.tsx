import { Burnish } from "@carats/render"
import Layout from "../_layout";
import './trade.sass';

export default Burnish<TradeData>((data) => {
  return (
    <Layout>
      <section id="trade" class="container">
        <div class="trade-header">
          <div class="trade-pair">
            <span class="trade-symbol">{data.symbol}</span>
            <span class="trade-separator">/</span>
            <span class="trade-quote">USD</span>
          </div>
          <div class="trade-price-block">
            <div class="trade-price">{data.price}</div>
            <span class="badge badge-emerald">{data.change24h}</span>
          </div>
        </div>

        <div class="trade-stats grid grid-4">
          <div class="card stat-card">
            <span class="label">24h Volume</span>
            <div class="stat-value">{data.volume}</div>
          </div>
          <div class="card stat-card">
            <span class="label">24h High</span>
            <div class="stat-value text-emerald">{data.high24h}</div>
          </div>
          <div class="card stat-card">
            <span class="label">24h Low</span>
            <div class="stat-value text-ruby">{data.low24h}</div>
          </div>
          <div class="card stat-card">
            <span class="label">Spread</span>
            <div class="stat-value">$5.00</div>
          </div>
        </div>

        <div class="trade-panels">
          <div class="trade-panel">
            <h2>Order Book</h2>
            <div class="card orderbook-card">
              <table class="orderbook-table">
                <thead>
                  <tr>
                    <th>Price (USD)</th>
                    <th>Size</th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody>
                  {data.orderBook.asks.slice().reverse().map((ask) => (
                    <tr class="ask-row">
                      <td class="text-ruby">{ask.price}</td>
                      <td>{ask.size}</td>
                      <td>{ask.price}</td>
                    </tr>
                  ))}
                  <tr class="spread-row">
                    <td colspan="3">{data.price}</td>
                  </tr>
                  {data.orderBook.bids.map((bid) => (
                    <tr class="bid-row">
                      <td class="text-emerald">{bid.price}</td>
                      <td>{bid.size}</td>
                      <td>{bid.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div class="trade-panel">
            <h2>Place Order</h2>
            <div class="card order-form-card">
              <div class="order-tabs">
                <span class="order-tab active">Buy</span>
                <span class="order-tab">Sell</span>
              </div>
              <div class="order-field">
                <span class="label">Order Type</span>
                <div class="order-type-select">
                  <span class="badge badge-gold">Limit</span>
                  <span class="badge">Market</span>
                  <span class="badge">Stop</span>
                </div>
              </div>
              <div class="order-field">
                <span class="label">Price</span>
                <input type="text" class="order-input" value={data.price} />
              </div>
              <div class="order-field">
                <span class="label">Amount ({data.symbol})</span>
                <input type="text" class="order-input" placeholder="0.00" />
              </div>
              <div class="order-field">
                <span class="label">Total (USD)</span>
                <input type="text" class="order-input" placeholder="0.00" />
              </div>
              <button class="btn btn-primary order-submit">Buy {data.symbol}</button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
})
