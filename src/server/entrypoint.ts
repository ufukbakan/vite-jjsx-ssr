import { defineServerEntry } from '@carats/ssr';
import facets from '../client/facets';
import './culets';

export default defineServerEntry(facets) // must export segments for @carats/express