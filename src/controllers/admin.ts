import { Response } from 'express'
import { z } from 'zod'
import { prisma } from '../libs/prisma'
import { createSlug } from '../services/post'
import { getUserById } from '../services/user'
import { ExtendedRequest } from '../types/extended-request'

export const addPost = async (req: ExtendedRequest, res: Response) => {
    if (!req.file) return

    const schema = z.object({
        title: z.string(),
        body: z.string(),
        repo: z.string(),
        link: z.string(),
        tags: z.string(),
        shortDescription: z.string(),
    })
    const data = schema.safeParse(req.body)
    if (!data.success) {
        console.log('Error in data', data.error)
        res.status(400).json({ error: 'Invalid data' })
        return
    }

    if (!req.file) {
        res.status(400).json({ error: 'No file uploaded' })
        return
    }
    const coverName = (req.file as Express.Multer.File).path
    // const coverName = await handleCover(req.file)
    if (!coverName) {
        res.status(400).json({ error: 'Invalid file type' })
        return
    }

    const slug = await createSlug(data.data.title)

    const newPost = await prisma.post.create({
        data: {
            authorId: req.user?.id,
            cover: coverName,
            title: data.data.title,
            slug,
            body: data.data.body,
            repo: data.data.repo,
            link: data.data.link,
            tags: data.data.tags,
            shortDescription: data.data.shortDescription,
        },
    })

    const author = await getUserById(newPost.authorId)

    res.status(201).json({
        post: {
            id: newPost.id,
            title: newPost.title,
            slug: newPost.slug,
            body: newPost.body,
            repo: newPost.repo,
            link: newPost.link,
            tags: newPost.tags,
            shortDescription: newPost.shortDescription,
            cover: newPost.cover,
            createdAt: newPost.createdAt,
            updatedAt: newPost.updatedAt,
            status: newPost.status,
            authorName:
                author && typeof author !== 'boolean' ? author.name : null,
        },
    })
}

// export const getPosts: RequestHandler = async (req, res) => {
//     console.log('getPosts')
// }

// export const getPost: RequestHandler = async (req, res) => {
//     console.log('getPost')
// }

// export const editPost: RequestHandler = async (req, res) => {
//     console.log('editPost')
// }

// export const removePost: RequestHandler = async (req, res) => {
//     console.log('removePost')
// }

// export const addPage: RequestHandler = async (req, res) => {
//     console.log('addPage')
// }

// export const getPage: RequestHandler = async (req, res) => {
//     console.log('getPage')
// }

// export const editPage: RequestHandler = async (req, res) => {
//     console.log('editPage')
// }

// export const removePage: RequestHandler = async (req, res) => {
//     console.log('removePage')
// }

// export const addSection: RequestHandler = async (req, res) => {
//     console.log('addSection')
// }

// export const getSections: RequestHandler = async (req, res) => {
//     console.log('getSections')
// }

// export const editSection: RequestHandler = async (req, res) => {
//     console.log('editSection')
// }

// export const removeSection: RequestHandler = async (req, res) => {
//     console.log('removeSection')
// }

// export const addPageTech: RequestHandler = async (req, res) => {
//     console.log('addPageTech')
// }

// export const getPageTechs: RequestHandler = async (req, res) => {
//     console.log('getPageTechs')
// }

// export const editPageTech: RequestHandler = async (req, res) => {
//     console.log('editPageTech')
// }

// export const removePageTech: RequestHandler = async (req, res) => {
//     console.log('removePageTech')
// }

// export const addPostTech: RequestHandler = async (req, res) => {
//     console.log('addPostTech')
// }

// export const getPostTechs: RequestHandler = async (req, res) => {
//     console.log('getPostTechs')
// }

// export const editPostTech: RequestHandler = async (req, res) => {
//     console.log('editPostTech')
// }

// export const removePostTech: RequestHandler = async (req, res) => {
//     console.log('removePostTech')
// }

// export const addSocial: RequestHandler = async (req, res) => {
//     console.log('addSocial')
// }

// export const getSocials: RequestHandler = async (req, res) => {
//     console.log('getSocials')
// }

// export const editSocial: RequestHandler = async (req, res) => {
//     console.log('editSocial')
// }

// export const removeSocial: RequestHandler = async (req, res) => {
//     console.log('removeSocial')
// }
