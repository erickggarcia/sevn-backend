import express from 'express'
import { Database } from '../controllers/controllers.js'

const route = express.Router()

route.get('/articles/mainArticles', (_, res) => {
    const data = Database.selectAll('articles')
    const mainArticles = data.slice(0, 3)
    return res.writeHead(201).end(JSON.stringify(mainArticles))
})

export default route