import express from 'express'
import cors from 'cors'

import './config/connection'
import router from './routes'
import env from './config/env'

const app = express()

app.get('/api', router)
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.listen(env.PORT)