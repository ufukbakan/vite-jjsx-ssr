import { init, transpile } from 'jjsx';
import ErrorPage from '../client/pages/ErrorPage';
import { getPageComponent } from '../infra/router';
import { matchRoute, parseUrl, qs, replaceParams } from '../infra/utils';
import APIRoutes from './routes';
init();

export interface ApiRequest {
  params: Record<string, string>;
  path: string;
  query: Record<string, string>;
}

export async function getApiData(url: string) {
  const { path, query } = parseUrl(url);
  for (const [routePath, apiRoute] of Object.entries(APIRoutes)) {
    const matchedParams = matchRoute(routePath, path);
    if (matchedParams) {
      return await apiRoute({ params: matchedParams, path, query });
    }
  }
  return { _status: 404, error: 'API endpoint not found' };
}

export async function render(url: string) {
  try {
    const { path, query } = parseUrl(url);
    const { component, params } = getPageComponent(path);
    const sspUrl = component.ssp ? replaceParams(component.ssp + qs(query), params) : null;
    const props = sspUrl
      ? await getApiData(sspUrl)
      : component.defaultProps || { url, params };
    const html = transpile(component(props));
    return { html, head: '' }
  } catch (error) {
    return {
      html: transpile(ErrorPage({ error: error as Error })),
      head: ''
    }
  }
}
