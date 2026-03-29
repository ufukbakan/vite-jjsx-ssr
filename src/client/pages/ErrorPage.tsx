import Layout from "./_layout";

export default function ErrorPage(error: Error) {
    return (
        <Layout>
            <h1>Error</h1>
            <p>{error.message}</p>
            <pre>{error.stack}</pre>
        </Layout>
    );
}