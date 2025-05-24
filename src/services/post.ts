import fs from 'fs/promises'
import slug from 'slug'
import { v4 } from 'uuid'
import { prisma } from '../libs/prisma'

export const handleCover = async (file: Express.Multer.File) => {
    try {
        const allowedTypes = ['image/jpeg', 'image/png', 'image/gif']
        if (allowedTypes.includes(file.mimetype)) {
            const coverName = `${v4()}-${file.originalname}`
            await fs.rename(file.path, `public/images/covers/${coverName}`)
            return coverName
        }
    } catch (error) {
        return false
    }

    return false
}

export const createSlug = async (title: string) => {
    let newSlug = slug(title)
    let keepTrying = true
    let count = 1

    while (keepTrying) {
        const post = await getPostBySlug(newSlug)
        if (!post) {
            keepTrying = false
        } else {
            newSlug = `${slug(title)}-${++count}`
        }
    }

    return newSlug
}

export const getPostBySlug = async (slug: string) => {
    return await prisma.post.findUnique({
        where: {
            slug,
        },
        include: {
            author: {
                select: {
                    name: true,
                },
            },
        },
    })
}

import { PostStatus } from '@prisma/client'

type CreatePostProps = {
    authorId: number
    cover: string
    createdAt: Date
    updatedAt: Date
    status: PostStatus
    title: string
    slug: string
    body: string
    repo: string
    link: string
    tags: string
    shortDescription: string
}

export const createPost = async (data: CreatePostProps) => {
    return await prisma.post.create({ data })
}
