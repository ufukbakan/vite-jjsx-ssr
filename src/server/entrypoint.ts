import defineServerEntry from '@carats/ssr';
import facets from '../client/facets.cara';

export default defineServerEntry(facets, import.meta.glob('./api/*.ts', { eager: true }))