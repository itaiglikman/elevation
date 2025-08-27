import express, { Request, Response } from 'express';
import nodeModel, { NoteFromUser } from '../models/nodeModel';
import noteValidation from '../middlewares/notesValidation';

const router = express.Router();

const notesUrl = '/'

// get all notes
router.get(notesUrl, async (req: Request, res: Response) => {
    const notes = await nodeModel.getNotes();
    res.status(200).send(notes);
})

router.get(notesUrl + ':id', async (req: Request, res: Response) => {
    const id = req.params.id;
    console.log(id);
    const note = await nodeModel.getNoteById(id);

    if (!note) res.status(404).json({ error: 'resource not found' });

    res.status(200).json(note)
})

// add new note
router.post(notesUrl, noteValidation, async (req: Request, res: Response) => {
    const { title, text } = req.body;
    const newNote = await nodeModel.createNote(title, text);
    res.status(201).json(newNote);
})



export default router;
