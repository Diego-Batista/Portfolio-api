import { Router } from 'express'
import * as authController from '../controllers/auth'

export const authRoutes = Router()

authRoutes.post('/signup', authController.sigUp)
authRoutes.post('/signin', authController.signIn)
// authRoutes.post('/signOut', authController.signOut)
// authRoutes.post('/validate')
