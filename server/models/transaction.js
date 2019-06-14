import { Schema as _Schema, model, Mongoose } from 'mongoose'
const Schema = _Schema

let transactionSchema = new Schema({
  userId: Mongoose.SchemaTypes.ObjectId,
  transactionDate: { type: Date, required: true },
  transactionType: { type: String, reuired: true },
  description: { type: String, required: true },
  charge: { type: Number, required: 0 },
  deposit: { type: Number, default: 0 },
  notes: { type: String, default: '' },
  createdOn: { type: Date, default: Date.now }

})
const Transaction = model('Transaction', transactionSchema)
export default Transaction
