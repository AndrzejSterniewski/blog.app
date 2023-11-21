import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { useForm } from "react-hook-form";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const PostForm = ({ action, actionText, ...props }) => {

    const [title, setTitle] = useState(props.title || '');
    const [author, setAuthor] = useState(props.author || '');
    const [published, setPublished] = useState(props.published ? new Date(props.published) : new Date());
    const [description, setDescription] = useState(props.description || '');
    const [content, setContent] = useState(props.content || '');

    const { register, handleSubmit: validate, formState: { errors } } = useForm();

    const handleSubmit = e => {
        // e.preventDefault();
        action({ title, author, published: published.toString(), description, content });
    };

    return (
        <Form onSubmit={validate(handleSubmit)}>
            {/* <Form.Label className="d-block">Title</Form.Label>
            <Form.Control type="text" placeholder="Enter title" style={{ width: '50%' }} value={title} onChange={e => setTitle(e.target.value)} />
             */}
            <Form.Group clasName="mb-3" controlId="formBasicEmail">
                <Form.Label>Title</Form.Label>
                <Form.Control
                    {...register("title", { required: true, minLength: 3 })}
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    type="text" placeholder="Enter title" style={{ width: '50%' }}
                />
                {/* {errors.title && <span>This field is required</span>} */}
                {errors.title && <small className="d-block form-text text-danger mt-2">Title is too short (min is 3)</small>}
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Author</Form.Label>
                <Form.Control
                    {...register("author", { required: true, minLength: 3 })}
                    value={author}
                    onChange={e => setAuthor(e.target.value)}
                    type="text" placeholder="Enter author" style={{ width: '50%' }}
                />
                {errors.author && <small className="d-block form-text text-danger mt-2">Author is too short (min is 3)</small>}
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Published</Form.Label>
                {/* <Form.Control type="text" placeholder="Enter date" style={{ width: '50%' }} value={published} onChange={e => setPublished(e.target.value)} /> */}
                <DatePicker className="m-1" selected={published} onChange={setPublished} />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Short description</Form.Label>
                <Form.Control
                    {...register("description", { required: true, minLength: 20 })}
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                    as="textarea" placeholder="Leave a comment" style={{ height: '100px' }}
                />
                {errors.author && <small className="d-block form-text text-danger mt-2">Description is too short (min is 20)</small>}
                {/* <Form.Label>Main content</Form.Label> */}
                {/* <Form.Control as="textarea" placeholder="Main text" style={{ height: '100px' }} value={content} onChange={e => setContent(e.target.value)} /> */}
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label className="mt-1">Main content</Form.Label>
                <ReactQuill theme="snow" placeholder="Main text" value={content} onChange={setContent} />
                {/* <div className="my-editing-area" style={{ height: '100px'} } value={content} onChange={e => setContent(e.target.value)} /> */}
                {/* </ReactQuill> */}
            </Form.Group>

            <Button className="mt-2" variant="primary" type="submit">
                {actionText}
            </Button>
        </Form>
    )
}

export default PostForm;