import { carats } from '@carats/express';
import express from 'express';

const app = express()
const port = process.env.PORT || 5173

app.use(carats())

export default app.listen(port, (err) => { // must export server for @carats/ssg
    if (err) {
        console.error(err)
        process.exit(1)
    }
    console.log(`Server started at http://localhost:${port}`)
})