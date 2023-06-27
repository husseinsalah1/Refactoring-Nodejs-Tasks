import userModel from "../model/user";

export default class UserRepository {
  static async updateProfile(userId, userInfo) {
    try {
      const user = await userModel.findByIdAndUpdate(userId, userInfo)
      await user.save()
      return user
    } catch (error) {
      throw new Error('Server Error')
    }
  }
}