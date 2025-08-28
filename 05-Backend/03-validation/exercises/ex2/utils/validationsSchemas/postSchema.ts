
// const commentSchema = {
//     type: 'object',
//     properties: {
//         postId: { type: 'number' },
//         content: {
//             type: 'string',
//             minLength: 3,
//             maxLength: 100
//         },
//         email: {
//             type: 'string',
//             format: 'email'
//         }

//     }

// }

const postSchema = {
    type: 'object',
    properties: {
        id: { type: 'number' },
        title: {
            type: 'string',
            maxLength: 20
        },
        content: {
            type: 'string',
            maxLength: 30
        },
        tags: {
            type: 'array',
            items: {
                type: 'string',
                maxLength: 10
            }
        },
    },
    required: ["title", "content", "tags"],
    additionalProperties: false,

}

export default postSchema;