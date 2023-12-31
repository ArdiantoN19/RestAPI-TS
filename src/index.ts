import express, { type Application, type Request, type Response } from 'express'
import dotenv from 'dotenv'

dotenv.config()

const app: Application = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/notes', (req: Request, res: Response) => {
  res.send('ok')
})

const ENV: { PORT: number; HOST: string } = {
  PORT: 5000,
  HOST: 'localhost'
}
const { PORT, HOST }: { PORT: number; HOST: string } = ENV
// const PORT: number = process.env.PORT
// const HOST:string = process.env.HOST

app.listen(PORT, HOST, () => {
  console.log(`Server sedang berjalan di http://${HOST}:${PORT}`)
})
