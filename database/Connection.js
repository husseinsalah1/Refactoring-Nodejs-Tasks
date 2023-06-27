import mongoose from 'mongoose'

export default class Database {
  static connect(url) {
    return mongoose.connect(url).then(() => {
      console.log('Database connected successfully')
    }).catch((err) => {
      console.log('Database connected failed')
    })
  }
}