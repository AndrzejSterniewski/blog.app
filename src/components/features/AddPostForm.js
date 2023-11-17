import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPost } from '../../redux/postsRedux';
import { useNavigate } from 'react-router-dom';
import shortid from "shortid";

const AddPostForm = () => {

    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [published, setPublished] = useState('');
    const [description, setDescription] = useState('');
    const [content, setContent] = useState('');

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(addPost({ id: shortid(), title, author, published, description, content }));
        navigate('/');
    };

    return (
        <Form onSubmit={handleSubmit}>
            {/* <Form.Group className="mb-3" controlId="formBasicEmail"> */}
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" placeholder="Enter title" value={title} onChange={e => setTitle(e.target.value)} />
            {/* </Form.Group> */}
            {/* <Form.Group> */}
            <Form.Label>Author</Form.Label>
            <Form.Control type="text" placeholder="Enter author" value={author} onChange={e => setAuthor(e.target.value)} />
            {/* </Form.Group> */}
            {/* <Form.Group> */}
            <Form.Label>Published</Form.Label>
            <Form.Control type="text" placeholder="Enter date" value={published} onChange={e => setPublished(e.target.value)} />
            {/* </Form.Group> */}
            {/* <Form.Group> */}
            <Form.Label>Short description</Form.Label>
            <Form.Control as="textarea" placeholder="Leave a comment" style={{ height: '100px' }} value={description} onChange={e => setDescription(e.target.value)} />
            {/* </Form.Group> */}
            {/* <Form.Group> */}
            <Form.Label>Main content</Form.Label>
            <Form.Control as="textarea" placeholder="Main text" style={{ height: '100px' }} value={content} onChange={e => setContent(e.target.value)} />
            {/* </Form.Group> */}
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    )
}

export default AddPostForm;