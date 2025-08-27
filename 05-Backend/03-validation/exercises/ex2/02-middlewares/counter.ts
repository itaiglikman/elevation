import { NextFunction, Request, Response } from "express";

let count = 0;

// create counter prop in request:
function counter(request: Request, response: Response, next: NextFunction): void {

    request.requestCounter = count++;

    next();
}

export default counter;