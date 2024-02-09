import mongoose from 'mongoose'

let isConnected: boolean

export const connection = async (): Promise<void> => {
  if (isConnected) {
    return
  }

  try {
    await mongoose.connect(process.env.MONGO_URI!)
    isConnected = true
    console.log('Connected')
  } catch (err) {
    const error = err as Error
    console.log(error)
    process.exit(1)
  }
}
