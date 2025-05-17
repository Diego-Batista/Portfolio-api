import bodyParser from 'body-parser'
import cors from 'cors'
import express from 'express'

const server = express()
server.use(cors())
server.use(bodyParser.json())
server.use(bodyParser.urlencoded({ extended: true }))
server.use(express.static('public'))

server.get('/api/ping', (req, res) => {
    res.json({ pong: true })
})

server.listen(4444, () => {
    console.log('Portfolio Diego backend running... 🚀')
})
