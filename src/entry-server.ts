import { init, transpile } from 'jjsx';
import { getPageComponent } from '../infra/router';
import { Request } from 'express';
import ErrorPage from './pages/ErrorPage';
init();

type MaybePromise<T> = T | Promise<T>;

const APIRoutes: Record<string, (_path: string, _req: Express.Request) => MaybePromise<Object>> = {
  '/api/about': () => ({
    title: 'About',
    description: 'About page'
  }),
  '/api/users': async (_path, _req) => {
    return { users: [{ id: 1, name: 'John' }, { id: 2, name: 'Jane' }] };
  },
};

export async function getApiData(apiPath: string, req: Request) {
  const apiRoute = APIRoutes[apiPath];
  if (apiRoute) {
    return await apiRoute(apiPath, req);
  }
  return { _status: 404, error: 'API endpoint not found' };
}

export async function render(url: string, req: Request) {
  try {
    const PageComponent = getPageComponent(url);
    const props = PageComponent.ssp
      ? await getApiData(PageComponent.ssp, req)
      : PageComponent.defaultProps || { pathName: url };
    const html = transpile(PageComponent(props));
    return { html, head: '' }
  } catch (error) {
    return {
      html: transpile(ErrorPage({ error: error as Error })),
      head: ''
    }
  }
}
