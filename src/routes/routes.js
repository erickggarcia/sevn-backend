import express from 'express'
import { Database } from '../controllers/controllers.js'

const route = express.Router()

route.get('/articles/mainArticles', (_, res) => {
    const data = Database.selectAll('articles')
    const mainArticles = data.slice(0, 3)
    return res.writeHead(201).end(JSON.stringify(mainArticles))
})

route.get('/articles/secondaryArticles', (_, res) => {
    const data = Database.selectAll('articles')
    const secondaryArticles = data.slice(3, Array.from(data).length)
    return res.writeHead(201).end(JSON.stringify(secondaryArticles))
})

route.get('/articles/:id', (req, res) => {
    const id = req.params.id
    const data = Database.selectArticleById('articles', Number(id))
    console.log(data)
    return res.writeHead(201).end(JSON.stringify(data))
})

export default route