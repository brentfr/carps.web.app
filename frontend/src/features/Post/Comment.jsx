import { Link, useNavigate } from '@tanstack/react-router';
import { UserIcon } from '../../components/UserIcon.jsx'
import { useUpvote } from '../../hooks/useUpvote.js'
import axios from 'axios';
import { BACKEND_BASE_URL } from '../../utils/constants.js';
import { useContext, useState } from 'react';
import { CurrentUserContext } from '../../routes/__root.jsx';

export function Comment({ commentDetails }) {
    const {
        currentUser,
        setCurrentUser
    } = useContext(CurrentUserContext);

    const [
        upvote,
        upvoteColor,
        handleUpvote,
        handleDownvote
    ] = useUpvote(commentDetails._id, 'comment', commentDetails.userVote);

    const [edit, setEdit] = useState(commentDetails.comment);
    const [editMode, setEditMode] = useState(false);
    const navigate = useNavigate();

    function handleEdit() {
        console.log(edit)
        axios({
            method: 'put',
            baseURL: BACKEND_BASE_URL,
            url: `comments/${commentDetails.parentPost}/comment/${commentDetails._id}`,
            data: {
                comment: edit
            }
        })
            .then(_ => {
                location.reload()
            })
            .catch(err => {
                console.log(err)
                if (err.status === 401 || err.status === 403) {
                    navigate({ to: '/login' })
                }
            })
    }

    function handleDelete() {
        axios({
            method: 'delete',
            baseURL: BACKEND_BASE_URL,
            url: `comments/${commentDetails.parentPost}/comment/${commentDetails._id}`
        })
            .then(_ => location.reload())
            .catch(err => {
                if (err.status === 401 || err.status === 403) {
                    navigate({ to: '/login' })
                }
            })
    }

    const upvotes = commentDetails.upvotes - commentDetails.userVote;

    return (
        <div>
            <div className="d-flex gap-3 my-3">
                <Link to={`/profile/${commentDetails.user._id}`}>
                    <UserIcon userIcon={commentDetails.user.picture} />
                </Link>
                <div>
                    <div className="d-flex gap-2 align-items-center">
                        <Link to={`/profile/${commentDetails.user._id}`}>
                            <p className="fw-bold m-0 text-white">{commentDetails.user.username}</p>
                        </Link>
                        <p className="text-muted m-0 small">{commentDetails.timestamp}</p>
                    </div>
                    {
                        editMode ?
                            (<div>
                                <textarea
                                    cols="50"
                                    rows="3"
                                    value={edit}
                                    onChange={e => setEdit(e.target.value)}
                                    type='text' >
                                </textarea>
                                <br />
                                <button onClick={handleEdit}>Save</button>
                                <button onClick={() => setEditMode(false)}>Cancel</button>
                            </div>) :
                            <p className="m-0">{commentDetails.comment}</p>
                    }
                    <div className='d-flex gap-2'>
                        <div className="d-flex gap-1 align-items-center">
                            <button
                                className='btn bg-transparent btn-outline-primary border-0'
                                onClick={handleUpvote}>
                                <i className='bi bi-chevron-up'></i>
                            </button>
                            <span style={{ color: upvoteColor() }}>{upvotes + upvote}</span>
                            <button
                                className='btn bg-transparent btn-outline-primary border-0'
                                onClick={handleDownvote}>
                                <i className='bi bi-chevron-down'></i>
                            </button>
                        </div>
                        {
                            // only display this when user is the owner
                            currentUser && currentUser.uid === commentDetails.user._id &&
                            <button
                                className='btn btn-secondary bg-transparent btn-sm rounded-pill'
                                onClick={() => setEditMode(!editMode)}>
                                <i className="bi bi-pencil-square me-2"></i>
                                Edit
                            </button>
                        }
                        {
                            // comment can be deleted by owner OR admin
                            currentUser && (currentUser.uid === commentDetails.user._id || currentUser.isAdmin) &&
                            <button
                                className='btn btn-secondary bg-transparent btn-sm rounded-pill text-danger'
                                onClick={handleDelete}>
                                <i className="bi bi-trash me-2"></i>
                                Delete
                            </button>
                        }
                    </div>
                </div>
            </div>
            <div className='ms-5 border-start border-primary'>
                {
                    commentDetails.children &&
                    commentDetails.children.map(childComment => <Comment commentDetails={childComment} />)
                }
            </div>
        </div >

    )
}
