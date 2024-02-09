import mongoose from 'mongoose'

const TransactionSchema = new mongoose.Schema({
  userID: { type: String, required: true },
  name: { type: String, required: true },
  type: { type: String, required: true },
  amount: { type: Number, required: true },
  isMonthly: { type: Boolean },
  createdAt: { type: Date, default: Date.now },
  categoryName: { type: String }
})

// eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
export default mongoose.models.Transaction || mongoose.model('Transaction', TransactionSchema)
