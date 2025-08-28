import { body } from 'express-validator'

const commentSchema = [
    body('postId')
        .notEmpty()
        .withMessage('PostId is required')
        .isNumeric()
        .withMessage('PostId must be a number'),
    body('content')
        .exists({ checkFalsy: true })
        .withMessage('Content is required')
        .isString()
        .withMessage('Content must be a string')
        .isLength({ min: 5, max: 30 })
        .withMessage('Content must be between 5 and 30 characters'),

    body('email')
        .notEmpty()
        .withMessage('Email is required')
        .isEmail()
        .withMessage('Must be a valid email')
]

export default commentSchema;