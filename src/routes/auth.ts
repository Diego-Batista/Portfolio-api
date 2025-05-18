import { Router } from 'express'
import * as authController from '../controllers/auth'

export const authRoutes = Router()

authRoutes.post('/signUp', authController.sigUp)
authRoutes.post('/signIn', authController.signIn)
authRoutes.post('/signOut', authController.signOut)
authRoutes.post('/validate')
