import { Router } from 'express'
import * as adminController from '../controllers/admin'

export const adminRoutes = Router()

adminRoutes.post('/posts', adminController.addPost)
adminRoutes.get('/posts', adminController.getPosts)
adminRoutes.get('/posts/:slug', adminController.getPost)
adminRoutes.put('/posts/:slug', adminController.editPost)
adminRoutes.delete('/posts/:slug', adminController.removePost)

adminRoutes.post('/page', adminController.addPage)
adminRoutes.get('/page', adminController.getPage)
adminRoutes.put('/page/:pageId', adminController.editPage)
adminRoutes.delete('/page/:pageId', adminController.removePage)

adminRoutes.post('/sections/:postId', adminController.addSection)
adminRoutes.get('/sections/:postId', adminController.getSections)
adminRoutes.put('/sections/:postId/:sectionId', adminController.editSection)
adminRoutes.delete(
    '/sections/:postId/:sectionId',
    adminController.removeSection
)

adminRoutes.post('/pagetechs/:pageId', adminController.addPageTech)
adminRoutes.get('/pagetechs/:pageId', adminController.getPageTechs)
adminRoutes.put('/pagetechs/:pageId/:techId', adminController.editPageTech)
adminRoutes.delete('/pagetechs/:pageId/:techId', adminController.removePageTech)

adminRoutes.post('/posttechs/:postId', adminController.addPostTech)
adminRoutes.get('/posttechs/:postId', adminController.getPostTechs)
adminRoutes.put('/posttechs/:postId/:techId', adminController.editPostTech)
adminRoutes.delete('/posttechs/:postId/:techId', adminController.removePostTech)

adminRoutes.post('/socials', adminController.addSocial)
adminRoutes.get('/socials', adminController.getSocials)
adminRoutes.put('/socials/:socialId', adminController.editSocial)
adminRoutes.delete('/socials/:socialId', adminController.removeSocial)
