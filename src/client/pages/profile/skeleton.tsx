import SkeletonAvatar from "../../components/SkeletonAvatar";
import SkeletonCard from "../../components/SkeletonCard";
import SkeletonText from "../../components/SkeletonText";
import Layout from "../_layout";

export default function Skeleton() {
  return (
    <Layout>
      <section id="profile" class="container">
        <div class="profile-header">
          <SkeletonAvatar size="md" />
          <div class="profile-info">
            <h1><SkeletonText style="min-width:15ch" /></h1>
            <p class="profile-handle"><SkeletonText /></p>
          </div>
        </div>

        <div class="grid grid-3">
          <div class="card stat-card">
            <span class="label">Portfolio Value</span>
            <div class="stat-value"><SkeletonText /></div>
          </div>
          <div class="card stat-card">
            <span class="label">Active Positions</span>
            <div class="stat-value"><SkeletonText /></div>
          </div>
          <div class="card stat-card">
            <span class="label">Vault Tier</span>
            <div class="stat-value"><SkeletonText /></div>
          </div>
        </div>

        <h2 class="section-title">Contact</h2>
        <div class="card contact-card">
          <div class="contact-row">
            <span class="label">Email</span>
            <span><SkeletonText /></span>
          </div>
          <div class="contact-row">
            <span class="label">Phone</span>
            <span><SkeletonText /></span>
          </div>
          <div class="contact-row">
            <span class="label">Web</span>
            <span><SkeletonText /></span>
          </div>
        </div>

        <h2 class="section-title">Top Holdings</h2>
        <div class="grid grid-2">
          <SkeletonCard style="min-height: 120px" />
          <SkeletonCard style="min-height: 120px" />
          <SkeletonCard style="min-height: 120px" />
          <SkeletonCard style="min-height: 120px" />
        </div>
      </section>
    </Layout>
  )
}