import { CaratsComponentWithThis } from "@carats/render";
import Layout from "../_layout";
import './market.sass';


const Market: CaratsComponentWithThis = function () {
    this.head = <>
        <title>Market - The Vault</title>
        <meta name="description" content="Browse the market and trade your assets." />
    </>
    return (
        <Layout>
            <section class="market-page container">
                <h1>Market</h1>

                <div class="grid grid-3">
                    <a href="/trade/btc" class="card token-card">
                        <div class="token-header">
                            <span class="token-symbol">BTC</span>
                            <span class="badge badge-emerald">+2.34%</span>
                        </div>
                        <strong>Bitcoin</strong>
                        <div class="token-price">$67,234.18</div>
                        <div class="token-meta">
                            <span>MCap: $1.32T</span>
                            <span>Vol: $28.4B</span>
                        </div>
                    </a>
                    <a href="/trade/eth" class="card token-card">
                        <div class="token-header">
                            <span class="token-symbol">ETH</span>
                            <span class="badge badge-emerald">+5.12%</span>
                        </div>
                        <strong>Ethereum</strong>
                        <div class="token-price">$3,456.92</div>
                        <div class="token-meta">
                            <span>MCap: $415.6B</span>
                            <span>Vol: $14.2B</span>
                        </div>
                    </a>
                    <a href="/trade/sol" class="card token-card">
                        <div class="token-header">
                            <span class="token-symbol">SOL</span>
                            <span class="badge badge-ruby">-1.23%</span>
                        </div>
                        <strong>Solana</strong>
                        <div class="token-price">$178.45</div>
                        <div class="token-meta">
                            <span>MCap: $82.1B</span>
                            <span>Vol: $3.8B</span>
                        </div>
                    </a>
                    <a href="/trade/link" class="card token-card">
                        <div class="token-header">
                            <span class="token-symbol">LINK</span>
                            <span class="badge badge-emerald">+8.67%</span>
                        </div>
                        <strong>Chainlink</strong>
                        <div class="token-price">$18.72</div>
                        <div class="token-meta">
                            <span>MCap: $11.0B</span>
                            <span>Vol: $892M</span>
                        </div>
                    </a>
                    <a href="/trade/avax" class="card token-card">
                        <div class="token-header">
                            <span class="token-symbol">AVAX</span>
                            <span class="badge badge-emerald">+1.05%</span>
                        </div>
                        <strong>Avalanche</strong>
                        <div class="token-price">$42.18</div>
                        <div class="token-meta">
                            <span>MCap: $16.8B</span>
                            <span>Vol: $524M</span>
                        </div>
                    </a>
                    <a href="/trade/dot" class="card token-card">
                        <div class="token-header">
                            <span class="token-symbol">DOT</span>
                            <span class="badge badge-emerald">+12.40%</span>
                        </div>
                        <strong>Polkadot</strong>
                        <div class="token-price">$7.75</div>
                        <div class="token-meta">
                            <span>MCap: $10.2B</span>
                            <span>Vol: $412M</span>
                        </div>
                    </a>
                </div>
            </section>
        </Layout>
    )
}

export default Market