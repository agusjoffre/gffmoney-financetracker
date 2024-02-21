import mongoose from 'mongoose'

const CurrencySchema = new mongoose.Schema({
  code: { type: String, required: true },
  inflationRate: { type: Number, required: true },
  exchangeRate: { type: Number, required: true }
})

// eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
export default mongoose.models.Currency || mongoose.model('Currency', CurrencySchema)
