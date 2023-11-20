import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const PostForm = ({ action, actionText, ...props }) => {

    const [title, setTitle] = useState(props.title || '');
    const [author, setAuthor] = useState(props.author || '');
    const [published, setPublished] = useState(props.published || '');
    const [description, setDescription] = useState(props.description || '');
    const [content, setContent] = useState(props.content || '');


    const handleSubmit = e => {
        e.preventDefault();
        action({ title, author, published, description, content });
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" placeholder="Enter title" style={{ width: '50%' }} value={title} onChange={e => setTitle(e.target.value)} />
            <Form.Label>Author</Form.Label>
            <Form.Control type="text" placeholder="Enter author" style={{ width: '50%' }} value={author} onChange={e => setAuthor(e.target.value)} />
            <Form.Label>Published</Form.Label>
            {/* <Form.Control type="text" placeholder="Enter date" style={{ width: '50%' }} value={published} onChange={e => setPublished(e.target.value)} /> */}
            {/* <DatePicker selected={published} onChange={setPublished} /> */}
            <Form.Label>Short description</Form.Label>
            <Form.Control as="textarea" placeholder="Leave a comment" style={{ height: '100px' }} value={description} onChange={setDescription} />
            {/* <Form.Label>Main content</Form.Label> */}
            {/* <Form.Control as="textarea" placeholder="Main text" style={{ height: '100px' }} value={content} onChange={e => setContent(e.target.value)} /> */}
            <Form.Label>Main content</Form.Label>
            <ReactQuill theme="snow" placeholder="Main text" value={content} onChange={setContent} />
                {/* <div className="my-editing-area" style={{ height: '100px' }} value={content} onChange={e => setContent(e.target.value)} /> */}
            {/* </ReactQuill> */}
            <Button variant="primary" type="submit">
                {actionText}
            </Button>
        </Form>
    )
}

export default PostForm;