export const notesSchema = {
    type: 'object',
    properties: {
        id: { type: 'string' },
        title: { type: 'string', maxLength: 100 },
        text: { type: 'string', maxLength: 500 },
        date: { type: 'string', format: 'date-time' },
        updatedAt: { type: 'string', format: 'date-time' }
    },
    required: ['title', 'text', 'date'],
    additionalProperties: false
};