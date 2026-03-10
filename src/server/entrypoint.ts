import { init } from 'jjsx';
import { renderPage } from '../infra/render';
import { matchRoute, parseUrl } from '../infra/url';
import { transpile } from 'jjsx';
import ErrorPage from '../client/pages/ErrorPage';
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
    const html = await renderPage(url, getApiData);
    return { html, head: '' }
  } catch (error) {
    return {
      html: transpile(ErrorPage({ error: error as Error })),
      head: ''
    }
  }
}
