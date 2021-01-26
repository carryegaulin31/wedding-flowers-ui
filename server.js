import express from 'express'
import bodyParser from 'body-parser'
import path from 'path'
import { getAllColors, getColorByName } from './controllers/colors'
import { getAllFlowers, getFlowerByName, saveNewFlower } from './controllers/flowers'
import { getAllSeasons, getSeasonByName } from './controllers/seasons'

const app = express()

app.use(express.static('public'))

app.get('/api/seasons', getAllSeasons)
app.get('/api/seasons/:season', getSeasonByName)

app.get('/api/colors', getAllColors)
app.get('/api/colors/:id', getColorByName)

app.get('/api/flowers', getAllFlowers)
app.get('/api/flowers/:name', getFlowerByName)

app.post('/', bodyParser.json(), saveNewFlower)

app.all('*', (request, response) => response.sendFile(path.resolve(__dirname, 'public', 'index.html')))

app.listen(1337, () => {
  console.log('Listening on port 1337...') // eslint-disable-line no-console
})
