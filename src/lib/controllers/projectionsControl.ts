'use server'
import ProjectionSchema from '@/db/models/ProjectionSchema'
import { connection } from '@/db/dbConnect'
import { auth } from '@clerk/nextjs'
import type { Projection, ProjectionTransaction } from '@/types/types'
import ProjectionTransactionSchema from '@/db/models/ProjectionTransactionSchema'

const { userId } = auth()
export const initializeProjection = async (): Promise<Projection> => {
  try {
    await connection()
    const existingProjection = await ProjectionSchema.findOne({ userID: userId })

    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    if (!(existingProjection)) {
      const projection = {
        userID: userId,
        income: 0,
        outcome: 0,
        transactions: []
      }
      const newProjection = await new ProjectionSchema(projection).save()
      return JSON.parse(JSON.stringify(newProjection))
    } else {
      return JSON.parse(JSON.stringify(existingProjection))
    }
  } catch (err) {
    const error = err as Error
    throw new Error(error.message)
  }
}

export const createProjectionTransaction = async (formData: FormData): Promise<ProjectionTransaction> => {
  try {
    await connection()
    await initializeProjection()
    const projTransaction = {
      userID: userId,
      name: formData.get('name') as string,
      type: formData.get('type') as string,
      amount: Number(formData.get('amount'))
    }
    const newTransaction = await new ProjectionTransactionSchema(projTransaction).save()

    // push to projection
    await ProjectionSchema.findOneAndUpdate({ userID: userId }, { $push: { transactions: newTransaction._id } })

    return JSON.parse(JSON.stringify(newTransaction))
  } catch (err) {
    const error = err as Error
    throw new Error(error.message)
  }
}
