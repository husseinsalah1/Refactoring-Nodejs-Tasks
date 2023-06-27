import UserServices from '../service/User.serv'
import EmailServices from '../service/Email.serv'

export default class UserController {
  static async updateProfile (res, req) {
    try {
      const userId = req.params.id
      const userInfo = req.body
      const user = await UserServices(userId, userInfo)
      const sendMail = await EmailServices(user.email)
      res.status(200).json({user, sendMail})
    } catch (error) {
      res.send(error)
    }
  }
}