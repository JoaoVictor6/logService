import { Router } from "express";
const routes = Router()

const middleware = (req, res, next) => {
  req.id = '3124142'

  next()
}

routes.get('/', (req, res) => {
  res.json({
    path: req.path 
  })
})

routes.get('/auth', middleware, (req, res) => {
  res.json({
    path: req.path,
    id: req.id
  })
})

export {routes}