import mongoose from 'mongoose'

const ProjectionSchema = new mongoose.Schema({
  userID: { type: String, required: true },
  income: { type: Number, required: true },
  outcome: { type: Number, required: true },
  transactions: [{ type: mongoose.Schema.Types.ObjectId, ref: 'ProjectionTransaction' }],
  createdAt: { type: Date, default: Date.now }

})

// eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
export default mongoose.models.Projection || mongoose.model('Projection', ProjectionSchema)
