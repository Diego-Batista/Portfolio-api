import { RequestHandler } from 'express'

export const sigUp: RequestHandler = async (req, res) => {
    console.log('sigUp')
}

export const signIn: RequestHandler = async (req, res) => {
    console.log('signIn')
}

export const signOut: RequestHandler = async (req, res) => {
    console.log('signOut')
}

export const validate: RequestHandler = async (req, res) => {
    console.log('validate')
}
