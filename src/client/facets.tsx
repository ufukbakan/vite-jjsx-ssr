import { defineFacets } from '@carats/render';
import ErrorPage from './pages/_error';
import NotFound from './pages/_not_found';
import Home from './pages/home';
import Market from './pages/market';
import Profile from './pages/profile';
import Trade from './pages/trade';
import Layout from './pages/_layout';

export default defineFacets({
    routes: {
        '/': Home,
        '/profile': Profile,
        '/market': Market,
        '/trade/:symbol': Trade
    },
    suspense: {
        error: ErrorPage,
        notFound: NotFound,
        loading: () => <Layout><center>💎 Loading...</center></Layout>
    },
    inAppRouting: true
});
