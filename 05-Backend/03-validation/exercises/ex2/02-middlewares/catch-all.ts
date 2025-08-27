import { NextFunction, Request, Response } from "express";
import { ClientError } from "../utils/types";

function catchAll( request: Request, response: Response, next: NextFunction) {
// function catchAll(err: ClientError, request: Request, response: Response, next: NextFunction) {

    // console.log(err);
    // response.status(err.status).send(err.message);
    // Handles 404 - route not found
    console.error('Error: route not found');
    response.status(404).send('Not found');
}

export default catchAll;
