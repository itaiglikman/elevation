import { Request, Response, NextFunction, response } from "express";
import { Person } from "../02-models/Person";

async function getPeople(req: Request, res: Response, next: NextFunction) {
    try {
        const people = await Person.find({})
        res.status(200).json(people)
    } catch (error) {
        console.log(error);
        res.status(error.status).json({ error: error.message })
    }
}

async function createPerson(req: Request, res: Response, next: NextFunction) {
    try {
        const person = new Person(req.body);
        const newPerson = await person.save();
        res.status(201).json(newPerson);
    } catch (error) {
        console.log(error);
        res.status(error.status).json({ error: error.message })
    }
}

async function updatePerson(req: Request, res: Response, next: NextFunction) {
    try {
        const id = req.params.id;
        const newPerson = await Person.findByIdAndUpdate(id, req.body);
        res.status(201).json(newPerson);
    } catch (error) {
        console.log(error);
        res.status(error.status).json({ error: error.message })
    }
}

async function deleteAll(req: Request, res: Response, next: NextFunction) {
    try {
        await Person.deleteMany({});
        res.status(204).send('deleted');
    } catch (error) {
        console.log(error);
        res.status(error.status).json({ error: error.message })
    }
}

export default {
    getPeople, createPerson, deleteAll, updatePerson
}