import { carats } from '@carats/express';
import { defineServerEntry } from '@carats/ssr';
import express from 'express';
import facets from '../client/facets';
import './culets';


export const segments = defineServerEntry(facets) // must export segments for @carats/express

const app = express()
const port = process.env.PORT || 5173

app.use(carats())

export const server = app.listen(port, (err) => { // must export server for @carats/ssg
  if (err) {
    console.error(err)
    process.exit(1)
  }
  console.log(`Server started at http://localhost:${port}`)
})