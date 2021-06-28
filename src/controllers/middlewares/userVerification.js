const {check, body, validationResult} = require('express-validator');
const handler = require('../../handlers/index');

const checkEmailInUse = (value) => {
    return handler.findOneUser(value)    
}

const emailExist = () => {
    return [
        check('email').isEmail().withMessage('Is not an Email'),
        check('email').notEmpty().withMessage('Email is Empty'),
        body('email').custom(checkEmailInUse).withMessage('Email already in Use'),
    ]
}

const emailValidate = (req, res, next) => {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
      return next();
    }

    res.status(400).json({ errors: errors.array() });
}

module.exports = {
    emailExist,
    emailValidate
}