import { defineServerEntry } from '@carats/ssr';
import facets from '../client/facets.cara';
import getTradeData from './culets/trade';
import getProfileData from './culets/profile';
const seat = <T>(f: T) => f;

seat(getProfileData)
seat(getTradeData)

export default defineServerEntry(facets)
