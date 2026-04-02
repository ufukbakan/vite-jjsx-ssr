import { seat, culet, defineServerEntry } from '@carats/ssr';
import facets from '../client/facets.cara';
import getTradeData from './culets/trade';

seat(getTradeData)
culet<User>('/profile', () => {
  return {
    id: '1',
    name: 'Alexander Whitmore',
    username: 'awhitmore',
    email: 'a.whitmore@vault.io',
    phone: '+1 (212) 555-0193',
    website: 'whitmore.capital',
  };
});

export default defineServerEntry(facets)
