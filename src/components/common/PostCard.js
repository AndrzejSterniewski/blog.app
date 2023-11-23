import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Col from 'react-bootstrap/Col';
import formatDate from '../../utils/formatDate';

const PostCard = (props) => {

    return (
        <Col sm={4} className="p-2">
            <Card>
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Subtitle className="mb-2">Author: {props.author} </Card.Subtitle>
                    <Card.Subtitle className="mb-2">Published: {formatDate(props.published)}</Card.Subtitle>
                    <Card.Subtitle className="mb-2">Category: {props.category}</Card.Subtitle>
                    <Card.Text>
                        {props.description}
                    </Card.Text>
                    {/* <Button as={Link} to={"/post/" + props.id}>Read more</Button> */}
                    <Button as={Link} to={`/post/${props.id}`}>Read more</Button>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default PostCard;