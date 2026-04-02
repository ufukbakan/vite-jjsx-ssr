import Layout from "../_layout";
import './error.sass';

export default function ErrorPage(error: Error) {
    return (
        <Layout>
            <section class="error-page container">
                <div class="error-icon">⚠</div>
                <h1>System Alert</h1>
                <p class="error-message">{error.message}</p>
                <a href="/" class="btn btn-primary">Return to Dashboard</a>
                <pre class="error-stack">{error.stack}</pre>
            </section>
        </Layout>
    );
}
