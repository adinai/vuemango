import { Schema as _Schema, model } from 'mongoose'
const Schema = _Schema

let userSchema = new Schema({
  first: { type: String, required: true },
  last: { type: String, reuired: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  isActive: { type: Boolean, default: true },
  creation: { type: Date, default: Date.now }

})
const User = model('User', userSchema)
export default User
