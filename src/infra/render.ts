import { transpile } from 'jjsx';
import { getPageComponent } from './router';
import { parseUrl, qs, replaceParams } from './url';

export async function renderPage(url: string, fetcher: (sspUrl: string) => Promise<any>): Promise<string> {
    const { path, query } = parseUrl(url);
    const { component, params } = getPageComponent(path);
    const sspUrl = component.ssp ? replaceParams(component.ssp + qs(query), params) : null;
    const props = sspUrl ? await fetcher(sspUrl) : component.defaultProps || { url, params };
    return transpile(component(props));
}
