import { culet, defineServerEntry } from '@carats/ssr';
import facets from '../client/facets.cara';
import getUserProfile from './culets/Profile.cara';

culet('/profile/:id', getUserProfile);

export default defineServerEntry(facets)