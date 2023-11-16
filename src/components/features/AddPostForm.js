import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const AddPostForm = () => {
    return (
            <Form>
                {/* <Form.Group className="mb-3" controlId="formBasicEmail"> */}
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" placeholder="Enter title" />
                {/* </Form.Group> */}
                {/* <Form.Group> */}
                    <Form.Label>Author</Form.Label>
                    <Form.Control type="text" placeholder="Enter author" />
                {/* </Form.Group> */}
                {/* <Form.Group> */}
                    <Form.Label>Published</Form.Label>
                    <Form.Control type="text" placeholder="Enter date" />
                {/* </Form.Group> */}
                {/* <Form.Group> */}
                    <Form.Label>Short description</Form.Label>
                    <Form.Control as="textarea" placeholder="Leave a comment" style={{ height: '100px' }} />
                {/* </Form.Group> */}
                {/* <Form.Group> */}
                    <Form.Label>Main content</Form.Label>
                    <Form.Control as="textarea" placeholder="Main text" style={{ height: '100px' }} />
                {/* </Form.Group> */}
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
    )
}

export default AddPostForm;