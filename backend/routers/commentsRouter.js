import express from 'express';
import { getComment, createComment, createReply, updateComment, deleteComment } from '../controllers/commentsController.js'
import { checkAuthorization, checkRefreshToken, reloadAccessToken } from '../controllers/authenticationController.js';

const commentsRouter = express.Router();

// GET comment in corresponding post
commentsRouter.get('/:postID/comment', checkAuthorization, getComment);

// POST comment under post
commentsRouter.post('/:postID/comment', checkRefreshToken, reloadAccessToken, createComment);

// POST comment (reply) under comment
commentsRouter.post('/:postID/comment/:commentID', checkRefreshToken, reloadAccessToken, createReply);

// EDIT comment attributes with authorization
commentsRouter.put('/:postID/comment/:commentID', checkRefreshToken, reloadAccessToken, updateComment);

// DELETE comment with authorization
commentsRouter.delete('/:postID/comment/:commentID', checkRefreshToken, reloadAccessToken, deleteComment);

export { commentsRouter }
