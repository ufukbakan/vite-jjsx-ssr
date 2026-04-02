import Layout from '../_layout';
import './home.sass';

export default function Home() {
    return (
        <Layout>
            <section class="hero">
                <div class="container">
                    <span class="label">Elite Digital Asset Management</span>
                    <h1 class="hero-title">Secure Your <strong class="text-gold">Legacy</strong></h1>
                    <p class="hero-subtitle">The ultimate sanctuary for sovereign wealth. Precision-engineered custody meets institutional-grade yield for the modern digital estate.</p>
                    <div class="hero-actions">
                        <a href="/profile" class="btn btn-primary">View Portfolio</a>
                        <a href="/market" class="btn btn-ghost">Explore Markets</a>
                    </div>
                </div>
            </section>

            <section class="dashboard container">
                <div class="grid grid-4">
                    <div class="card stat-card">
                        <span class="label">Total Portfolio</span>
                        <div class="stat-value">$12,847,320</div>
                        <span class="badge badge-emerald">+14.2% MTD</span>
                    </div>
                    <div class="card stat-card">
                        <span class="label">Bitcoin</span>
                        <div class="stat-value">47.82 <span class="stat-unit">BTC</span></div>
                        <span class="badge badge-emerald">+3.8%</span>
                    </div>
                    <div class="card stat-card">
                        <span class="label">Ethereum</span>
                        <div class="stat-value">312.50 <span class="stat-unit">ETH</span></div>
                        <span class="badge badge-emerald">+7.1%</span>
                    </div>
                    <div class="card stat-card">
                        <span class="label">Vault Yield</span>
                        <div class="stat-value">8.4<span class="stat-unit">%</span></div>
                        <span class="badge badge-gold">APY</span>
                    </div>
                </div>

                <h2 class="section-title">Watchlist</h2>
                <div class="card table-card">
                    <table class="asset-table">
                        <thead>
                            <tr>
                                <th>Asset</th>
                                <th>Price</th>
                                <th>24h Change</th>
                                <th>Holdings</th>
                                <th>Value</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><a href="/trade/btc"><strong>Bitcoin</strong></a> <span class="ticker">BTC</span></td>
                                <td>$67,234.18</td>
                                <td class="text-emerald">+2.34%</td>
                                <td>47.82 BTC</td>
                                <td>$3,215,432</td>
                            </tr>
                            <tr>
                                <td><a href="/trade/eth"><strong>Ethereum</strong></a> <span class="ticker">ETH</span></td>
                                <td>$3,456.92</td>
                                <td class="text-emerald">+5.12%</td>
                                <td>312.50 ETH</td>
                                <td>$1,080,288</td>
                            </tr>
                            <tr>
                                <td><a href="/trade/sol"><strong>Solana</strong></a> <span class="ticker">SOL</span></td>
                                <td>$178.45</td>
                                <td class="text-ruby">-1.23%</td>
                                <td>4,200 SOL</td>
                                <td>$749,490</td>
                            </tr>
                            <tr>
                                <td><a href="/trade/link"><strong>Chainlink</strong></a> <span class="ticker">LINK</span></td>
                                <td>$18.72</td>
                                <td class="text-emerald">+8.67%</td>
                                <td>15,000 LINK</td>
                                <td>$280,800</td>
                            </tr>
                            <tr>
                                <td><a href="/trade/avax"><strong>Avalanche</strong></a> <span class="ticker">AVAX</span></td>
                                <td>$42.18</td>
                                <td class="text-emerald">+1.05%</td>
                                <td>8,500 AVAX</td>
                                <td>$358,530</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h2 class="section-title">Recent Activity</h2>
                <div class="grid grid-3">
                    <div class="card activity-card">
                        <div class="activity-icon text-emerald">↑</div>
                        <div class="activity-details">
                            <strong>Stake Deposit</strong>
                            <p>32.0 ETH to Vault Prime</p>
                            <span class="activity-time">2 hours ago</span>
                        </div>
                    </div>
                    <div class="card activity-card">
                        <div class="activity-icon text-gold">⇄</div>
                        <div class="activity-details">
                            <strong>Swap Executed</strong>
                            <p>5.0 BTC → 97.2 ETH</p>
                            <span class="activity-time">6 hours ago</span>
                        </div>
                    </div>
                    <div class="card activity-card">
                        <div class="activity-icon text-sapphire">◆</div>
                        <div class="activity-details">
                            <strong>NFT Acquired</strong>
                            <p>CryptoPunk #7804</p>
                            <span class="activity-time">1 day ago</span>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}
