import { body } from 'express-validator'

export const registerValidation = [
    body('email', 'enter valid email').isEmail(),
    body('password', 'enter valid password').isLength({ min: 5}),
    body('fullName', 'enter correct full name').isLength({ min: 3}),
    body('avatarUrl').optional().isURL(),
]