import { NextFunction, Request, Response } from "express";
import postModel from "../01-models/postModel";
import { BodyComment } from "../utils/types";

function getPosts(req: Request, res: Response, next: NextFunction) {
    try {
        const posts = postModel.getPosts();
        res.status(200).json(posts)
    } catch (error) {
        console.log(error);
        res.status(error.status).json({ error: error.message })
    }
}

function getPostById(req: Request, res: Response, next: NextFunction) {
    try {
        const id = req.params.id;
        const post = postModel.getPostById(id);
        res.status(200).json(post)
    } catch (error) {
        console.log(error);
        res.status(error.status).json({ error: error.message })
    }
}

function addPost(req: Request, res: Response, next: NextFunction) {
    try {
        console.log('postController post');
        const post = postModel.addPost(req.body);
        console.log(post);

        res.status(201).json(post);
    } catch (error) {
        console.log('add post error');
        console.log({ error });
        res.status(error.status).json({ error: error.message })
    }
}

function getCommentByPostIdAndCommentId(req: Request, res: Response, next: NextFunction) {
    console.log('getCommentByPostIdAndCommentId');
    const { id, commentId } = req.params;
    const comment = postModel.getCommentByPostIdAndCommentId(id, +commentId);
    res.status(200).json(comment)
}

function addComment(req: Request, res: Response, next: NextFunction) {
    const bodyComment: BodyComment = req.body;
    postModel.validateComment(req); // check for valid post and comment body
    const postWithNewComment = postModel.addComment(bodyComment);
    res.status(201).json(postWithNewComment)
}

export default {
    getPosts,
    getPostById,
    addPost,
    getCommentByPostIdAndCommentId,
    addComment,
}