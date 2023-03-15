const {
    check,
    validationResult
} = require('express-validator');

exports.categoryValidation = [
    check('name')
    .not()
    .isEmpty()
    .withMessage('Name is required')
    .isLength({
        min: 3
    })
    .withMessage('Name must be at least 3 characters long')
    .isLength({
        max: 20
    })
    .withMessage('Name must be less than 20 characters long')
    .trim()
    .escape(),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array()
            });
        }
        next();
    }
];