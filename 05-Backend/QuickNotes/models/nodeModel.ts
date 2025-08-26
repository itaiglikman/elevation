import fs from 'fs';
import { nanoid } from 'nanoid';

export type NoteFromUser = {
    text: string,
    title: string
}

export type Note = {
    id: string,
    text: string,
    title: string
    date: string
}

async function getNotes() {
    const notes = await fs.promises.readFile('data/notes.json', 'utf8');
    return JSON.parse(notes);
}

async function getNoteById(id: string) {
    const notes = await getNotes();
    const note = notes.find(n => n.id === id);
    return note;
}

async function createNote(title: string, text: string) {
    const notes = await getNotes();
    const newNote = {
        title, text, id: nanoid(5), date: new Date()
    }
    notes.push(newNote);
    await fs.promises.writeFile('data/notes.json', JSON.stringify(notes));
    return newNote;

}

export default {
    getNotes, getNoteById, createNote
}