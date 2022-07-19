import Express from 'express'
import { routes } from './app.js'
import {logger} from './logger.js'

const app = Express()

app.use(Express.json())
app.use(logger)
app.use(routes)

app.listen(3001, () => {
  console.log('☲ > server is running is http://localhost:3001')
})