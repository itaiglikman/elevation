import { NextFunction, Request, Response } from "express";
import { ClientError } from "../utils/types";

function validateId(request: Request, response: Response, next: NextFunction): void {

    const id = request.params.id;
    if (!id) {
        console.log('validateId error');
        throw new ClientError(400, 'no post id');
    }
    if (isNaN(Number(id))) {
        console.log('validateId error');
        throw new ClientError(400, 'invalid id')
    }
    next();
}

export default validateId;