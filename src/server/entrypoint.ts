import { carats } from '@carats/express';
import { culet, defineServerEntry } from '@carats/ssr';
import express from 'express';
import facets from '../client/facets.cara';
import './culets/trade'; // must import culets defined in other files

culet<User>('/profile', () => { // can define culets in entrypoint file too
  return {
    id: '1',
    name: 'Alexander Whitmore',
    username: 'awhitmore',
    email: 'a.whitmore@vault.io',
    phone: '+1 (212) 555-0193',
    website: 'whitmore.capital',
  };
});

export const segments = defineServerEntry(facets) // must export segments for @carats/render

const app = express()
const port = process.env.PORT || 5173

app.use(carats())

export const server = app.listen(port, (err) => { // must export server for @carats/ssg
  !err && console.log(`Server started at http://localhost:${port}`)
})