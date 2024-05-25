import express from 'express'
import cors from 'cors'

const app = express()

app.listen(3001, () => {
    console.log('server running on por 3001')
})