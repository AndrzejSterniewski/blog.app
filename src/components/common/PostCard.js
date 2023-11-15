import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const PostCard = (props) => {

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Author: {props.author}</Card.Subtitle>
                <Card.Subtitle className="mb-2 text-muted">Published: {props.published}</Card.Subtitle>
                <Card.Text>
                    {props.description}
                </Card.Text>
                <Button href={"/post/" + props.id}>Read more</Button>
            </Card.Body>
        </Card>
    )
}

export default PostCard;