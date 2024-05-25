import express from 'express'

const route = express.Router()

route.get('/articles', (req, res) => {
    console.log('requisição realizada para endpoint articles')
    return res.writeHead(201).end()
})

export default route