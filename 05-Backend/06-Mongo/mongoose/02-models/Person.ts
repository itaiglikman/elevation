import mongoose, { Schema } from "mongoose";

const PersonSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: String,
    age: Number
})

export const Person = mongoose.model('person', PersonSchema, 'people');
