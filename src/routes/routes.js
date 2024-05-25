import express from 'express'
import { Database } from '../controllers/controllers.js'

const route = express.Router()

route.get('/articles', (req, res) => {
    const data = Database.selectAll('articles')
    return res.writeHead(201).end(JSON.stringify(data))
})

export default route