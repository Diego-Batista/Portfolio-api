import bcrypt from 'bcryptjs'
import { prisma } from '../libs/prisma'

type CreateUserProps = {
    name: string
    email: string
    password: string
}

export const createUser = async ({
    name,
    email,
    password,
}: CreateUserProps) => {
    email = email.toLowerCase()

    const user = await prisma.user.findFirst({
        where: { email },
    })

    if (user) return false

    const newPassword = bcrypt.hashSync(password, 10)

    return await prisma.user.create({
        data: {
            name,
            email,
            password: newPassword,
        },
    })
}

export const verifyUser = async ({
    email,
    password,
}: {
    email: string
    password: string
}) => {
    email = email.toLowerCase()

    const user = await prisma.user.findFirst({
        where: { email },
    })

    if (!user) return false

    const isValid = bcrypt.compareSync(password, user.password)

    if (!isValid) return false

    return user
}

export const getUserById = async (id: number) => {
    const user = await prisma.user.findUnique({
        where: { id },
        select: {
            id: true,
            name: true,
            email: true,
            status: true,
        },
    })

    if (!user) return false

    return user
}
