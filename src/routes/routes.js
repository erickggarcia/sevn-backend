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

    const limit = 8
    const tableLenght = Array.from(data).length 
    const differenceToLimitOfReturn = tableLenght - 3
    const newTableLenght = differenceToLimitOfReturn > limit ? tableLenght - (differenceToLimitOfReturn - limit) : tableLenght

    const secondaryArticles = data.slice(3, newTableLenght)
    return res.writeHead(201).end(JSON.stringify(secondaryArticles))
})

route.get('/articles/:id', (req, res) => {
    const id = req.params.id
    const data = Database.selectArticleById('articles', Number(id))
    if(data) {
        return res.writeHead(201).end(JSON.stringify(data))
    } else {
        return res.writeHead(404).end()
    }
})

export default route