import express, { Request, Response, } from 'express';
import postsModel from "../01-models/postsModel";

const router = express.Router();

// GET post object by id:
router.get('/posts', (req: Request, res: Response) => {
    const posts = postsModel.getPostsData();
    res.status(200).json(posts);
})

// GET post object by id:
router.get('/posts/:id', (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const post = postsModel.getPostById(id);
    post
        ? res.status(200).json(post)
        : res.status(400).json({ error: 'post not found' });
})

// GET all comments by post id:
router.get('/comments/:postId', (req: Request, res: Response) => {
    const postId = Number(req.params.postId);
    const comments = postsModel.getCommentsByPostId(postId);
    comments
        ? res.status(200).json(comments)
        : res.status(400).json({ error: 'comments not found' });
})

// Post create new postObj
router.post('/posts', (req: Request, res: Response) => {
    const { userId, title, body } = { ...req.body };
    const post = postsModel.addPost(userId, title, body);
    res.status(201).json({ post });
})

// DELETE post by id
router.delete('/posts/:id', (req: Request, res: Response) => {
    const id = +req.params.id;
    postsModel.deletePostById(id);
    res.status(200).send('deleted');
})

// DELETE comment by postId and commentId
router.delete('/posts/:postId/:commentId', (req: Request, res: Response) => {
    const { postId, commentId } = req.params;
    const errMsg = postsModel.deleteCommentById(+postId, +commentId);
    errMsg
        ? res.status(400).json({ error: errMsg })
        : res.sendStatus(200);
})

//
router.get('/postsByQuery', (req: Request, res: Response) => {
    console.log(req.query);
    const post = postsModel.searchPostsByQuery(req);
    console.log(post);
    res.send(post)
})

export default router;