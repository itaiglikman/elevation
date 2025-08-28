import { NextFunction, Request, Response } from "express";
import { ClientError } from "../utils/types";

// Error Handling Middleware (always in the END)
function catchAll(err: ClientError, request: Request, response: Response, next: NextFunction) {
    console.error(err);
    response.status(err.status || 500).json({
        message: err.message || "Server Error",
    });
}

export default catchAll;
