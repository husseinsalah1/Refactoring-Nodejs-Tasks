import express from 'express'
import Database from '../database/Connection'

// Constant Variables 
const app = express()
const PORT = 3000
const MONGODB_URL = "mongodb://127.0.0.1:27017/task-S"

Database.connect(MONGODB_URL)
app.listen(() => {
  console.log(`Server is running on port ${PORT}`)
})