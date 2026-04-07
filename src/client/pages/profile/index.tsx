import { Burnish } from "@carats/render";
import Layout from "../_layout";
import './profile.sass';

export default Burnish(function (user: User) {
  this.head = <>
    <title>Profile for {user.name}</title>
    <meta name="description" content={`Profile for ${user.name} on The Vault exchange.`} />
  </>
  return (
    <Layout>
      <section id="profile" class="container">
        <div class="profile-header">
          <div class="profile-avatar">
            <span class="avatar-letter">{user.name.charAt(0)}</span>
          </div>
          <div class="profile-info">
            <h1>{user.name}</h1>
            <span class="badge badge-gold">Vault Member</span>
            <p class="profile-handle">@{user.username}</p>
          </div>
        </div>

        <div class="grid grid-3">
          <div class="card stat-card">
            <span class="label">Portfolio Value</span>
            <div class="stat-value">$4,285,600</div>
            <span class="badge badge-emerald">+22.4% YTD</span>
          </div>
          <div class="card stat-card">
            <span class="label">Active Positions</span>
            <div class="stat-value">18</div>
            <span class="badge badge-gold">Diversified</span>
          </div>
          <div class="card stat-card">
            <span class="label">Vault Tier</span>
            <div class="stat-value">Platinum</div>
            <span class="badge badge-emerald">Top 1%</span>
          </div>
        </div>

        <h2 class="section-title">Contact</h2>
        <div class="card contact-card">
          <div class="contact-row">
            <span class="label">Email</span>
            <span>{user.email}</span>
          </div>
          <div class="contact-row">
            <span class="label">Phone</span>
            <span>{user.phone}</span>
          </div>
          <div class="contact-row">
            <span class="label">Web</span>
            <span>{user.website}</span>
          </div>
        </div>

        <h2 class="section-title">Top Holdings</h2>
        <div class="grid grid-2">
          <div class="card holding-card">
            <div class="holding-header">
              <a href="/trade/btc"><strong>Bitcoin</strong></a>
              <span class="ticker">BTC</span>
            </div>
            <div class="holding-amount">12.4500 BTC</div>
            <div class="holding-value">$837,264</div>
            <div class="holding-change text-emerald">+3.8%</div>
          </div>
          <div class="card holding-card">
            <div class="holding-header">
              <a href="/trade/eth"><strong>Ethereum</strong></a>
              <span class="ticker">ETH</span>
            </div>
            <div class="holding-amount">85.0000 ETH</div>
            <div class="holding-value">$293,838</div>
            <div class="holding-change text-emerald">+7.1%</div>
          </div>
          <div class="card holding-card">
            <div class="holding-header">
              <a href="/trade/sol"><strong>Solana</strong></a>
              <span class="ticker">SOL</span>
            </div>
            <div class="holding-amount">1,200.00 SOL</div>
            <div class="holding-value">$214,140</div>
            <div class="holding-change text-ruby">-1.2%</div>
          </div>
          <div class="card holding-card">
            <div class="holding-header">
              <a href="/trade/dot"><strong>Polkadot</strong></a>
              <span class="ticker">DOT</span>
            </div>
            <div class="holding-amount">5,000.00 DOT</div>
            <div class="holding-value">$38,750</div>
            <div class="holding-change text-emerald">+12.4%</div>
          </div>
        </div>
      </section>
    </Layout>
  )
})
