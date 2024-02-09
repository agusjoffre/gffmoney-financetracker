import mongoose from 'mongoose'

const ProjectionTransactionSchema = new mongoose.Schema({
  userID: { type: String, required: true },
  name: { type: String, required: true },
  type: { type: String, required: true },
  amount: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now }
})

// eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
export default mongoose.models.ProjectionTransaction || mongoose.model('ProjectionTransaction', ProjectionTransactionSchema)
