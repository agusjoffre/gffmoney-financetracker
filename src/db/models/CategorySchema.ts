import mongoose from 'mongoose'

const CategorySchema = new mongoose.Schema({
  userID: { type: String, required: true },
  name: { type: String, required: true },
  importance: Number,
  transactions: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Transaction'
  }],
  createdAt: { type: Date, default: Date.now }
})

// eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
export default mongoose.models.Category || mongoose.model('Category', CategorySchema)
