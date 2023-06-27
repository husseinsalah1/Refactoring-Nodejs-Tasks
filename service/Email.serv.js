import userModel from "../model/user";3


export default class EmailServices {
  static sendConfirmationMail(email) {
    // send mail Code here 
    return `You will receive a confirmation message to your mail ${email}`
  }
}