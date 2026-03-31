import { Facets } from '@carats/render';
import ErrorPage from './pages/ErrorPage';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Profile from './pages/profile';

const facets: Facets = {
    routes: {
        '/': Home,
        '/profile/:id': Profile
    },
    suspense: {
        loading: () => '💎 Loading... 💎',
        error: ErrorPage,
        notFound: NotFound
    },
    inAppRouting: true
}

export default facets;