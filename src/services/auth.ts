import { User } from '@prisma/client'
import { createJwt } from '../libs/jwt'

export const createToken = (user: User) => {
    return createJwt({ id: user.id })
}
