import { connection } from '@/db/dbConnect'
import UserSchema from '@/db/models/UserSchema'
import { type User } from '@/types/types'
import { auth, currentUser } from '@clerk/nextjs'

const { userId } = auth()

export const createUser = async (): Promise<User> => {
  const user = await currentUser()
  try {
    await connection()
    const existingUser = await UserSchema.findOne({ userID: userId })
    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    if (!(existingUser)) {
      const newUser = await new UserSchema({
        userID: userId,
        income: 0,
        outcome: 0,
        balance: 0,
        transactions: [],
        categories: [],
        friends: [],
        projections: [],
        username: user?.username
      }).save() as User
      return JSON.parse(JSON.stringify(newUser))
    } else {
      return JSON.parse(JSON.stringify(existingUser))
    }
  } catch (err) {
    const error = err as Error
    throw new Error(error.message)
  }
}
