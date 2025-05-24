import multer from 'multer'
import { CloudinaryStorage } from 'multer-storage-cloudinary'
import { cloudinary } from './cloudinary'

const storage = new CloudinaryStorage({
    cloudinary,
    params: async (_req, file) => ({
        folder: 'portifolio-api',
        public_id: `${Date.now()}-${file.originalname}`,
        resource_type: 'auto',
    }),
})

export const upload = multer({ storage })

// export const upload = multer({
//     dest: 'tmp/',
// })
