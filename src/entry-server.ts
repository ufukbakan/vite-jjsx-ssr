import { init, transpile } from 'jjsx';
import type { Routes } from '../infra/router';
import { getPageComponent } from '../infra/router';
init();

const SSPMap: Record<string, (url: string) => Promise<any>> = {
  '/about': async () => ({
    title: 'About',
    description: 'About page'
  })
};

export async function getSSP(_url: string) {
  const ssp = SSPMap[_url];
  if (ssp) {
    return await ssp(_url);
  }
  return {};
}

export async function render(_url: string) {
  const props = await getSSP(_url);
  const PageComponent = getPageComponent(_url as keyof Routes);
  const html = transpile(PageComponent(props));
  return { html, head: '' }
}
