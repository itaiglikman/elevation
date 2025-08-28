import { NextFunction, Request, Response } from "express";
import { ClientError } from "../utils/types";

function validateCommentId(request: Request, response: Response, next: NextFunction): void {
    const { id, commentId } = request.params;
    
    if (!id) {
        console.log('commentId error');
        throw new ClientError(400, 'no post id');
    } else if (isNaN(Number(id))) {
        console.log('validateId error');
        throw new ClientError(400, 'invalid post id')
    } else if (!commentId) {
        console.log('commentId error');
        throw new ClientError(400, 'no comment id');
    } else if (isNaN(Number(commentId))) {
        console.log('validateId error');
        throw new ClientError(400, 'invalid comment id')
    }
    next();
}

export default validateCommentId;