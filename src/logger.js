import morgan from 'morgan'

morgan.token('userId', (req, res) => { 
  return req.id || 'no-auth'
})

morgan.token('body', (req, res) => {
  const body = JSON.stringify(req.body)   
  return body === "{}" ? 'no-body' : body
})


export const logger = morgan('LOG > :userId :method :body :status :url :remote-addr :date[iso]')