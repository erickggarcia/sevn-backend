import express from 'express'
import cors from 'cors'
import route from './routes/routes.js'

const app = express()

app.listen(3001, () => {
    console.log('server running on por 3001')
})

app.use(route)
app.use(cors)