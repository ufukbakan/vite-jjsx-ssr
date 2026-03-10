import Layout from "./_layout";

interface Props {
    error: Error;
}

export default function ErrorPage({ error }: Props) {
    return (
        <Layout>
            <h1>Error</h1>
            <p>{error.message}</p>
            <pre>{error.stack}</pre>
        </Layout>
    );
}