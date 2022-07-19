import morgan from 'morgan'

morgan.token('userId', (req, res) => { 
  return req.id || 'no-auth'
})


export const logger = morgan('LOG > :userId :method :status :url :remote-addr :date[iso]')