import {Schema, model} from "mongoose";
const userEntities = {
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email : {
    type: String,
    required: true,
    trim: true,
  },
  password : {
    type: String,
    required: true,
    trim: true,
  }
}
const userSchema = new Schema(userEntities)
const userModel = model('user', userSchema)

export default userModel