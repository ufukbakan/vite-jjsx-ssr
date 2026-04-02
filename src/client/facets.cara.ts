import { Facets } from '@carats/render';
import ErrorPage from './pages/_error';
import Home from './pages/home';
import Market from './pages/market';
import NotFound from './pages/_not_found';
import Profile from './pages/profile';
import Trade from './pages/trade';

const facets: Facets = {
    routes: {
        '/': Home,
        '/profile': Profile,
        '/market': Market,
        '/trade/:symbol': Trade
    },
    suspense: {
        loading: () => 'Loading...',
        error: ErrorPage,
        notFound: NotFound
    },
    inAppRouting: true
}

export default facets;
