import express from "express";
import postController from "../03-controllers/postController";
import postValidation from "../02-middlewares/validatePost";
import validateId from "../02-middlewares/validateId";
import validateCommentId from "../02-middlewares/validateCommentId";
import commentSchema from "../utils/validationsSchemas/commentSchema";

const router = express.Router();

router.get('/', postController.getPosts);
router.post('/', postValidation, postController.addPost);
router.get('/:id', validateId, postController.getPostById);
router.get('/:id/comments/:commentId', validateCommentId, postController.getCommentByPostIdAndCommentId);
router.post('/:id/comments', validateId, commentSchema, postController.addComment);



export default router;