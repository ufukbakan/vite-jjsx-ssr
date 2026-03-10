import { init, transpile } from 'jjsx';
import { getPageComponent } from '../infra/router';
import { Request } from 'express';
import ErrorPage from '../client/pages/ErrorPage';
import APIRoutes from './routes';
init();

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
