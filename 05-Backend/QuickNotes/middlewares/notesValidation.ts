import Ajv from 'Ajv'
import addFormats from "ajv-formats";
import { notesSchema } from '../data/notesSchema';
import { Request, Response, NextFunction, ErrorRequestHandler } from 'express';

const ajv = new Ajv();
addFormats(ajv);
const validateNote = ajv.compile(notesSchema);

function noteValidation(req: Request, res: Response, next: NextFunction) {
    const valid = validateNote(req.body);
    console.log('note validation valid: ', valid);
    if (valid) next();
    else {
        console.log(validateNote.errors);
        const error = new Error('Note Validation error');
        res.status(400)
        // error.message = validateNote.errors.map(err => err.message)
        throw validateNote.errors.map(err => err.message)
        // throw {}
        // console.log(validateNote.errors);
    }
    next();
}

export default noteValidation;