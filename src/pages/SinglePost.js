import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { getPostById, deletePost } from "../redux/postsRedux";
import { useParams } from 'react-router';
import { Button } from "react-bootstrap";
import { Link, Navigate } from "react-router-dom";
import Modal from 'react-bootstrap/Modal';
import Container from '../components/common/Container';

const SinglePost = () => {

    const dispatch = useDispatch();

    const { id } = useParams();

    const post = useSelector(state => getPostById(state, id));

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const removePost = () => {
        dispatch(deletePost(id));
    }

    if (!post) return <Navigate to="/" />
    else return (
        <Container>
            <section className="d-flex justify-content-between flex-wrap">
                <h1>Post title</h1>
                <div className="d-flex justify-content-between align-items-center">
                    <Button as={Link} to={"/post/edit/" + id} variant="outline-info" className="m-2">Edit</Button>
                    <Button variant="outline-danger" onClick={handleShow}>Delete</Button>{' '}
                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Are you sure?</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>The operation will completely remove this post from the app. <br /> Are you sure you want to do that?</Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Cancel
                            </Button>
                            <Button variant="danger" onClick={removePost}>
                                Remove
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </div>
            </section>
            <section>
                <p>Author: {post.author}</p>
                <p>Published: {post.published}</p>
                {/* <p >{post.content}</p> */}
                {/* new code: */}
                <p dangerouslySetInnerHTML={{ __html: post.content }} />
            </section>
        </Container>
    )
}

export default SinglePost;