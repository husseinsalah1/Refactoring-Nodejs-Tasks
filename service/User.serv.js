import UserRepository from '../repository/User.repo'

export default class  UserServices {
  static updateProfile(userId, userInfo) {
    return UserRepository.updateProfile(userId, userInfo)
  }
}