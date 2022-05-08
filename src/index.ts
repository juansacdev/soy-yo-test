import express from 'express'
import config from './config'
import router from './routes'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

router(app)

app.listen(config.port, () => console.log(`I'm alive on http://localhost:${config.port}`))
