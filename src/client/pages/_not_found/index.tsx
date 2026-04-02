import Layout from "../_layout"
import './notfound.sass'

export default function NotFound() {
    return (
        <Layout>
            <section class="notfound-page container">
                <div class="notfound-code">404</div>
                <h1>Vault Not Found</h1>
                <p>The asset or page you're looking for doesn't exist in this vault.</p>
                <a href="/" class="btn btn-primary">Return to Dashboard</a>
            </section>
        </Layout>
    )
}
