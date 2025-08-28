
import { NextFunction, Request, Response } from "express";
import { validationResult } from 'express-validator';
import { ClientError } from "../utils/types";

// const validateComment = validationResult(commentSchema);

function postValidation(req: Request, res: Response, next: NextFunction) {
    const errors = validationResult(req);
    console.log("comment validation errors: ", errors);
    if (errors.isEmpty()) next();
    else {
        // const errors = validatePost.errors.map(err => err.message).join(", ")
        console.log("comment validation error: ", errors);
        const error = new ClientError(400, errors.array().join(', '));
        next(error);
    }
}

export default postValidation;