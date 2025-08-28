import { NextFunction, Request, Response } from "express";

function routeNotFound(request: Request, response: Response, next: NextFunction) {

    // Handles 404 - route not found
    console.error('Error: route not found');
    response.status(404).send('Not found ' +request.originalUrl);
}

export default routeNotFound;
