import { body } from 'express-validator'

export const loginValidation = [
    body('email', 'enter valid email').isEmail(),
    body('password', 'enter valid password').isLength({ min: 5}),
]

export const registerValidation = [
    body('email', 'enter valid email').isEmail(),
    body('password', 'enter valid password').isLength({ min: 5}),
    body('fullName', 'enter correct full name').isLength({ min: 3}),
    body('avatarUrl').optional().isURL(),
]

export const recipeCreateValidation = [
    body('title', 'write title of recipe').isLength({ min: 3}).isString(),
    body('description', 'write description of recipe').isLength({ min: 10}).isString(),
    body('ingredients', 'not correct format of ingredients').optional().isString(),
    body('imageUrl', 'not correct URL').optional().isString(),
];