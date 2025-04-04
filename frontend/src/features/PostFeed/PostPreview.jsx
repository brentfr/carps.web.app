import { useUpvote } from '../../hooks/useUpvote.js'
import { Link } from "@tanstack/react-router";
import { UserIcon } from '../../components/UserIcon.jsx';

export function PostPreview({ postDetails }) {
    const [
        userUpvote,
        upvoteColor,
        handleUpvote,
        handleDownvote
    ] = useUpvote(postDetails._id, 'post', postDetails.userVote);

    // gets only the first two tags
    const tags = postDetails.tags
        .filter((_, index) => index < 2)
        .map((tag, index) =>
            <span className="badge rounded-pill text-bg-primary fs-6" key={index}>{tag}</span>
        )

    const date = (new Date(postDetails.timestamp))
        .toLocaleString("en-GB", {
            year: "numeric",
            month: "short",
            day: "numeric",
            hour: "numeric",
            minute: "numeric"
        });

    // remove the user's upvote from the totalUpvotes, otherwise it is counted twice
    const upvotes = postDetails.upvotes - postDetails.userVote;

    return (
        <div className="d-flex my-5" >
            <div className='w-25 d-flex'>
                <div className="mx-3 my-auto">
                    <p className="w-100 m-0 text-center fs-4 fw-bold" style={{ color: upvoteColor() }}>
                        {upvotes + userUpvote}
                    </p>
                    <div>
                        <button className="p-1 btn bg-transparent btn-outline-light border-0" onClick={handleUpvote}>
                            <i class="bi bi-chevron-up"></i>
                        </button>
                        <button className="p-1 btn bg-transparent btn-outline-light border-0" onClick={handleDownvote}>
                            <i class="bi bi-chevron-down"></i>
                        </button>
                    </div>
                </div>
                <div className="me-3">
                    <div className="d-flex gap-2">
                        {tags}
                    </div>
                    <div className="d-flex">
                        <UserIcon userIcon={postDetails.user.picture} />
                        <div className="d-flex flex-column">
                            <span className="fs-5">{postDetails.user.username}</span>
                            <span className="fw-light fst-italic">{date}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-50 position-relative">
                <span className="badge rounded-pill w-100 text-bg-primary text-start fs-4 fw-bold">
                    <span className='text-uppercase'>{postDetails.start}</span>
                    {
                        postDetails.oneWay ?
                            <i class="mx-2 bi bi-arrow-right"></i> :
                            <i class="mx-2 bi bi-arrow-left-right"></i>
                    }
                    <span className='text-uppercase'>{postDetails.destination}</span>
                </span>
                <p className="ps-3 text-truncate">{postDetails.description}</p>
                <Link className="stretched-link" to={`/post/${postDetails._id}`}></Link>
            </div>
        </div>
    )
}
