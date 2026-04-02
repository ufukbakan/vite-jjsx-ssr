import { carats } from '@carats/express'
import express from 'express'

const app = express()
const port = process.env.PORT || 5173

app.use(carats())

const server = app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`)
})

export default server