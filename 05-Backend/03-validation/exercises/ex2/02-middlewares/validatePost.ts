import Ajv from "ajv";
import addFormats from "ajv-formats";
import { NextFunction, Request, Response } from "express";
import postSchema from "../utils/validationsSchemas/postSchema";
import { ClientError } from "../utils/types";

const ajv = new Ajv({allErrors:true});
addFormats(ajv);
const validatePost = ajv.compile(postSchema);

function postValidation(req: Request, res: Response, next: NextFunction) {
    const valid = validatePost(req.body);
    if (valid) next();
    else {
        const errors = validatePost.errors.map(err => err.message).join(", ")
        console.log("post validation error: ", errors);
        const error = new ClientError(400, errors);
        next(error);
    }
}

export default postValidation;