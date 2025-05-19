import { RequestHandler } from 'express'
import { z } from 'zod'
import { createUser } from '../services/user'

export const sigUp: RequestHandler = async (req, res) => {
    const schema = z.object({
        email: z.string().email(),
        password: z.string().min(6),
        name: z.string().min(2),
    })
    const data = schema.safeParse(req.body)

    if (!data.success) {
        res.json({ error: data.error.flatten().fieldErrors })
        return
    }

    const newUser = await createUser(data.data)

    if (!newUser) {
        res.status(400).json({ error: 'Error creating user' })
        return
    }

    const token = '123'

    res.status(201).json({
        message: 'User created',
        user: {
            id: newUser.id,
            name: newUser.name,
            email: newUser.email,
        },
        token,
    })
}

// export const signIn: RequestHandler = async (req, res) => {
//     console.log('signIn')
// }

// export const signOut: RequestHandler = async (req, res) => {
//     console.log('signOut')
// }

// export const validate: RequestHandler = async (req, res) => {
//     console.log('validate')
// }
