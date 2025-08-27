import { NextFunction, Request, Response } from "express";
import { ClientError } from "../utils/types";

// log request time and method
function validateId(request: Request, response: Response, next: NextFunction): void {

    const id = +request.params.id;
    if (isNaN(id)) {
        console.log('validateId error');
        throw new ClientError(400, 'invalid id')
    }
    next();
}

export default validateId;