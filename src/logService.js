// 3124142 GET 304 /auth ::ffff:127.0.0.1 2022-07-19T14:16:56.295Z
import fs from 'fs'
import path from 'path'

function sanitizeAppOutput(text) {
  const [
    userId, 
    method, 
    body, 
    status, 
    path, 
    remoteAddress, 
    timestamp
  ] = text
    .replace('\n', '')
    .replace('LOG > ', '')
    .split(' ')

  return { 
    userId, 
    method, 
    body, 
    status, 
    path, 
    remoteAddress, 
    timestamp
  }
}
const writableStream = fs.createWriteStream('./logs/api.log')


process.stdin.on('data', data => {
  const appOutput = data.toString()
  
  if(appOutput.match(/LOG >/)){
    const jsonObject = JSON.stringify(sanitizeAppOutput(appOutput))
    writableStream.write(Buffer.from(`${jsonObject}\n`))
  }

  process.stdout.write(data)
}).on('end', () => {
  writableStream.end()
})