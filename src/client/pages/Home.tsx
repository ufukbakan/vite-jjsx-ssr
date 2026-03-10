import Counter from '../components/Counter';
import Layout from './_layout';
import typescriptLogo from './typescript.svg';

export default function Home() {
    return (
        <Layout>
            <a href="https://vite.dev" target="_blank">
                <img src="/vite.svg" class="logo" alt="Vite logo" />
            </a>
            <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
                <img src={typescriptLogo} class="logo vanilla" alt="JavaScript logo" />
            </a>
            <a href='https://www.npmjs.com/package/jjsx'>
                <img src='/jjsx.svg' class="logo" alt="JJSX logo" />
            </a>
            <h1>Hello World!</h1>
            <Counter />
        </Layout>
    )
}