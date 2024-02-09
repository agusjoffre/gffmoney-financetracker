import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
  userID: { type: String, required: true },
  income: { type: Number, required: true },
  outcome: { type: Number, required: true },
  balance: { type: Number, required: true },
  transactions: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Transaction' }],
  categories: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Category' }],
  friends: [String],
  projections: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Projection' }],
  username: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
})

// eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
export default mongoose.models.User || mongoose.model('User', UserSchema)
