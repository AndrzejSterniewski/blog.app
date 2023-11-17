import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

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
            <Form.Control type="text" placeholder="Enter date" style={{ width: '50%' }} value={published} onChange={e => setPublished(e.target.value)} />
            <Form.Label>Short description</Form.Label>
            <Form.Control as="textarea" placeholder="Leave a comment" style={{ height: '100px' }} value={description} onChange={e => setDescription(e.target.value)} />
            <Form.Label>Main content</Form.Label>
            <Form.Control as="textarea" placeholder="Main text" style={{ height: '100px' }} value={content} onChange={e => setContent(e.target.value)} />
            <Button variant="primary" type="submit">
                {actionText}
            </Button>
        </Form>
    )
}

export default PostForm;