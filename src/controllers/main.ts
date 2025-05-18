import { RequestHandler } from 'express'

export const getAllPosts: RequestHandler = async (req, res) => {
    console.log('getAllPosts')
}

export const getPost: RequestHandler = async (req, res) => {
    console.log('getPost')
    const { slug } = req.params
    res.json({ post: { slug } })
}

export const getRelatedPosts: RequestHandler = async (req, res) => {
    console.log('getRelatedPosts')
    const { slug } = req.params
    res.json({ relatedPosts: { slug } })
}
