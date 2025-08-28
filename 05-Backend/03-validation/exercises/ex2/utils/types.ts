export class ClientError {

    public status: number;
    public message: string;

    public constructor(status: number, message: string) {
        this.status = status;
        this.message = message;
    }
}

export type Post = {
    id: number,
    title: string,
    content: string,
    tags: string[],
    comments: Comment[]
}

export type BodyPost = {
    title: string,
    content: string,
    tags: string[],
}

export type Posts = { [key: number]: Post }

export type Comment = {
    id: number,
    postId: string,
    content: string,
    email: string
}

export type BodyComment = {
    postId: string,
    content: string,
    email: string
}