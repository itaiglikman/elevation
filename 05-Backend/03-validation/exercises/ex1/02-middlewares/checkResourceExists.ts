import { NextFunction, Request, Response } from "express";
import { ClientError } from "../utils/types";

// log request time and method
function checkResourceExists(request: Request, response: Response, next: NextFunction): void {
    const resource = response.json();
    if (!resource) {
        console.log('checkResourceExists error');
        response.status(400).json(new ClientError(400, 'resource not found'))
        // throw new ClientError(400, 'resource not found');
    }

    next();
}

export default checkResourceExists;