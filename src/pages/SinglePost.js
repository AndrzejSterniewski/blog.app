import { useSelector } from "react-redux";
import { getPostById } from "../redux/postsRedux";
import { useParams } from 'react-router';
import { Button } from "react-bootstrap";

const SinglePost = () => {

    const { id } = useParams();
    console.log(id);

    const post = useSelector(state => getPostById(state, id));

    console.log(post);

    return (
        <div>
            <section className="d-flex justify-content-between flex-wrap">
                <h1>Post title</h1>
                <div className="d-flex justify-content-between">
                    <Button href={"/post/edit/" + id} variant="outline-info">Edit</Button>
                    <Button variant="outline-danger">Delete</Button>{' '}
                </div>

            </section>
            <section>
                <p>Author: {post.author}</p>
                <p>Published: {post.published}</p>
                <p>{post.content}</p>
            </section>
        </div>

    )
}

export default SinglePost;